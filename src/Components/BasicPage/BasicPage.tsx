import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './BasicPage.css'
import RangeSlider from "./Rangeslider";
import { Button } from 'react-bootstrap';

interface QuestionData{
    question:string;
    answer: string;
}

const index: Record<string, number> = {
    "1. I enjoy solving complex problems:" : 0,
    "2. I prefer working in a team rather than alone: ": 1,
    "3. I am comfortable with public speaking and presenting ideas to others:": 2,
    "4. I find it fulfilling to help others and make a positive impact on their lives:" : 3,
    "5. I am interested in technology and staying updated with the latest trends:": 4,
    "6. I prefer a job that allows for a flexible schedule and the possibility of remote work:": 5,
    "7. I am more creative than analytical:": 6
}


const questions: string[] = 
    [
    "1. I enjoy solving complex problems:",
    "2. I prefer working in a team rather than alone: ", 
    "3. I am comfortable with public speaking and presenting ideas to others:", 
    "4. I find it fulfilling to help others and make a positive impact on their lives:",
    "5. I am interested in technology and staying updated with the latest trends:",
    "6. I prefer a job that allows for a flexible schedule and the possibility of remote work:",
    "7. I am more creative than analytical:"
    ]

let pageData = Array.from(questions, (question: string) => ({ question: question, answer: "" })) as QuestionData[];
const saveDetailedDataKey = "BASIC_DATA";
const currData = sessionStorage.getItem(saveDetailedDataKey);
if (currData !== null) {
    pageData = JSON.parse(currData) as QuestionData[];
}

const rangeValues: Record<string, string> = {
    1: "Disagree",
    2: "Somewhat Disagree",
    3: "Neither Agree nor Disagree",
    4: "Somewhat Agree",
    5: "Agree"
  };

const reverseMap: Record<string, string>= { 
    "Disagree": "1",
    "Somewhat Disagree": "2",
    "Neither Agree nor Disagree": "3",
    "Somewhat Agree": "4",
    "Agree": "5"
}


export function BasicPage() {

    const [questionData, setQuestionData] = React.useState(pageData);
    const [answered, setAnswered] = React.useState(0);

    const handleSliderChange = (question: string, resp: string) => {
        const newAnswer = rangeValues[resp]
        let data = [...questionData];
        data[index[question]] = { question: question, answer: newAnswer};
        setQuestionData(data);
        // Check if all questions have been answered
        let plus = answered + 1;
        setAnswered(plus);
            // Save data to local storage
        sessionStorage.setItem(saveDetailedDataKey, JSON.stringify(data));
        console.log(data)
    };

    let eventKey = 0;
    return (
        <div className='basic-page-container'>
            <h1 className='title'>Basic Quiz</h1>
            <div className='accordion-container'>
                <Accordion defaultActiveKey={questions.map((_, i) => i.toString())} style={{ width: '50%', backgroundColor: '#21273b' }} alwaysOpen>
                    {questions.map((question: string) => (
                        <Accordion.Item key={eventKey} eventKey={(eventKey++).toString()} className="item">
                            <Accordion.Header className='header'>{question}</Accordion.Header>
                            <Accordion.Body className='body'>  
                                <RangeSlider 
                                    question={question} 
                                    handleChange={handleSliderChange}
                                    rangeValues={rangeValues} 
                                    key={question}
                                    numresp={reverseMap[questionData[index[question]].answer]}
                                />
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                    )}
                </Accordion>
                <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }} disabled={answered < 7}>Submit</Button>
            </div>
        </div>
    )
}