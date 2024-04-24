import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './BasicPage.css'
import RangeSlider from "./Rangeslider";





export function BasicPage() {

    const [, setRangeSliderValue] = useState("3")
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeSliderValue(event.target.value)
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
                                <RangeSlider handleChange={handleChange}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                    )}
                </Accordion>
            </div>
        </div>
    )
}
