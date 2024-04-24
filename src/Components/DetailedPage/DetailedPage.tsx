import React from 'react'
import './DetailedPage.css'
import { Card, Form, Carousel, ProgressBar } from 'react-bootstrap'
import AnswerBox from './AnswerBox'
import SubmitButton from './SubmitButton'

interface QuestionData {
    question: string;
    answer: string;
}

const questions = [
    'What subjects or activites were you most interested in during your school years?',
    'Describe an accomplishment or project that you are particularly proud of. What did it involve?',
    'What are the top three tasks you enjoy doing the most in your current or past jobs?',
    'What work environment do you thrive in? For example, fast-paced, structured, autonomous, etc.',
    'If you had unlimited resources, what kind of work would you want to do?',
    'Can you identify any industries r careers that you have always found intriguing? Why?',
    'What are your long-term career goals? Where do you see yourself in five to ten years?'
];
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
            let data = [...questionData];
            data[questionNumber] = { question: question, answer: e.target.value };
            setQuestionData(data);
            // Check if all questions have been answered
            setIsFinished(data.every((question) => question.answer.length > 0));
            // Save data to session storage
            sessionStorage.setItem(saveDetailedDataKey, JSON.stringify(data));
        }
    }

    const calculateFilledAnswers = (data: QuestionData[]) => {
        return data.filter(question => question.answer.trim() !== '').length;
    }

    const filledAnswers = calculateFilledAnswers(questionData);
    const totalQuestions = questionData.length;
    const progressPercentage = (filledAnswers / totalQuestions) * 100;

    return (
        <div className='page-container'>
            <div className='heading-container'>
                <h1>Detailed Quiz</h1>
                <ProgressBar className='custom-progress-bar' min={0} max={100} now={progressPercentage} animated striped />
            </div>
            <Card className='question-card' style={{ backgroundColor: "var(--light-bg)" }}>
                <Card.Header as='h4' style={{ color: 'white', padding: '1rem 0' }}>
                    Question {questionNumber + 1}
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Carousel activeIndex={questionNumber} onSelect={handleSelect} interval={null}>
                            {questionData.map(({ question, answer }) => (
                                <Carousel.Item key={questionKey++} style={{ height: '20rem' }}>
                                    <h1 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '3.5rem' }}>
                                        {question}
                                    </h1>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Form.Group style={{ textAlign: 'left' }}>
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
                        <SubmitButton isFinished={isFinished} />
                    </Form>
                </Card.Body>
            </Card>
        </div >
    )

}
