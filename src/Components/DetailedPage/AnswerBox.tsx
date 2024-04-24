import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AnswerBox = ({ handleAnswerChange, answer, maxAnswerLength, question }: {
    handleAnswerChange: (e: React.ChangeEvent<HTMLInputElement>, question: string) => void,
    answer: string,
    maxAnswerLength: number,
    question: string
}) => {
    const [answerState, setAnswerState] = useState(answer);
    return (
        <Form.Control
            value={answerState}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleAnswerChange(e, question)
                setAnswerState(e.target.value)
            }}
            maxLength={maxAnswerLength}
            as='textarea'
            rows={6}
            placeholder='Enter your answer'
            style={{ maxHeight: '175px', overflowY: 'auto', minHeight: '100px', width: '50vw' }}
        />
    );
}

export default AnswerBox;
