import React from 'react'
import './DetailedPage.css'
import { Card, Form, Carousel, Button } from 'react-bootstrap'
import AnswerBox from './AnswerBox'
interface QuestionData {
    question: string;
    answer: string;
}

const questions = ['What is your name?', 'What is your age?', 'What is your?', 'What is your name?', 'What is your age?', 'What is your?', 'What is your name?'];
let pageData = Array.from(questions, (question: string) => ({ question: question, answer: '' })) as QuestionData[];
const saveDetailedDataKey = "DETAILED_DATA";
const currData = sessionStorage.getItem(saveDetailedDataKey);
if (currData !== null) {
    pageData = JSON.parse(currData) as QuestionData[];
}
export function DetailedPage() {
    let questionKey = 0;
    const maxAnswerLength = 500;
    const [questionNumber, setQuestionNumber] = React.useState(0);

    // Array of objects to store question and answer data
    const [questionData, setQuestionData] = React.useState(pageData);
    const [isFinished, setIsFinished] = React.useState(questionData.every((question) => question.answer.length > 0));

    const handleSelect = (selectedIndex: number) => {
        setQuestionNumber(selectedIndex);
    };


    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, question: string) => {
        if (e.target.value.length < maxAnswerLength) {
            let data = questionData;
            data[questionNumber] = { question: question, answer: e.target.value };
            setQuestionData(data);
            // Check if all questions have been answered
            setIsFinished(data.every((question) => question.answer.length > 0));
            // Save data to local storage
            sessionStorage.setItem(saveDetailedDataKey, JSON.stringify(data));
        }
    }


    return (
        <div className='page-container'>
            <h1>Detailed Quiz</h1>
            <Card className='question-card' style={{ backgroundColor: "var(--light-bg)" }}>
                <Card.Header as='h4' style={{ color: 'white', padding: '1rem 0' }}>
                    Question {questionNumber + 1}
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Carousel activeIndex={questionNumber} onSelect={handleSelect} interval={null}>
                            {questionData.map(({ question, answer }) => (
                                <Carousel.Item key={questionKey++} style={{ height: '20rem' }}>
                                    <h1 style={{ color: 'white' }}>
                                        {question}
                                    </h1>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Form.Group style={{ textAlign: 'left' }}>
                                            <Form.Label>Your Answer</Form.Label>
                                            <AnswerBox
                                                handleAnswerChange={handleAnswerChange}
                                                answer={answer}
                                                maxAnswerLength={maxAnswerLength}
                                                question={question}
                                            />
                                        </Form.Group>
                                    </div>
                                </Carousel.Item>
                            )
                            )}
                        </Carousel>
                        <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }} disabled={!isFinished}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div >
    )

}
