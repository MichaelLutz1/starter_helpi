import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import './BasicPage.css'




export function BasicPage() {
    const questions: string[] = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7"]
    const [activeKey, setActiveKey] = useState<string | null>('0');

    const handleQuestionClick = (eventKey: string) => {
        setActiveKey(eventKey === activeKey ? null: eventKey);
    }

    return (
        <div className='basic-page-container'>
            <h1 className='title'>Basic Quiz</h1>
            <div className='accordion-container'>
                <Accordion activeKey={activeKey} style={{ width: '50%', backgroundColor: '#21273b' }} >
                    {questions.map((question: string, index: number) => (
                        <Accordion.Item key={index} eventKey={index.toString()} className="item">
                            <Accordion.Header className='header' onClick={() => handleQuestionClick(index.toString())}>{question}</Accordion.Header>
                            <Accordion.Body className='body'>
                                <Form.Check
                                    label="Option 1"
                                    name="group1"
                                    type='radio'
                                />
                                <Form.Check
                                    label="Option 2"
                                    name="group1"
                                    type='radio'
                                />
                                <Form.Check
                                    label="Option 3"
                                    name="group1"
                                    type='radio'
                                />
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                    )}
                </Accordion>
            </div>
        </div>
    )
}
