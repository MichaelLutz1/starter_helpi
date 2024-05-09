import React from 'react'
import './DetailedPage.css'
import { Card, Form, Carousel, ProgressBar } from 'react-bootstrap'
import AnswerBox from './AnswerBox'
import SubmitButton from './SubmitButton'


interface QuestionData {
    question: string;
    answer: string;
}


export function DetailedPage({ savaDetailDataKey, detailQuestionData, setDetailQuestionData, page, setPage }: Readonly<{ savaDetailDataKey: string, detailQuestionData: QuestionData[], setDetailQuestionData: (detailQuestionData: QuestionData[]) => void, page: string; setPage: (newPage: string) => void }>) {
    let questionKey = 0;
    const maxAnswerLength = 500;
    const minAnswerLength = 25;
    const [questionNumber, setQuestionNumber] = React.useState(0);

    // Array of objects to store question and answer data
    const [isFinished, setIsFinished] = React.useState(detailQuestionData.every((question) => question.answer.length > minAnswerLength));

    const handleSelect = (selectedIndex: number) => {
        setQuestionNumber(selectedIndex);
    };


    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, question: string) => {
        if (e.target.value.length < maxAnswerLength) {
            let data = [...detailQuestionData];
            data[questionNumber] = { question: question, answer: e.target.value };
            setDetailQuestionData(data);
            // Check if all questions have been answered
            setIsFinished(data.every((question) => question.answer.length > minAnswerLength));
            // Save data to session storage
            sessionStorage.setItem(savaDetailDataKey, JSON.stringify(data));
        }
    }

    const calculateFilledAnswers = (data: QuestionData[]) => {
        return data.filter(question => question.answer.trim().length > minAnswerLength).length;
    }

    const filledAnswers = calculateFilledAnswers(detailQuestionData);
    const totalQuestions = detailQuestionData.length;
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
                            {detailQuestionData.map(({ question, answer }) => (
                                <Carousel.Item key={questionKey++} style={{ height: '20rem' }}>
                                    <h1 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '3.5rem', marginTop: '0.5rem' }}>
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
                        <SubmitButton page={page} setPage={setPage} isFinished={isFinished} />
                    </Form>
                </Card.Body>
            </Card>
        </div >
    )

}
