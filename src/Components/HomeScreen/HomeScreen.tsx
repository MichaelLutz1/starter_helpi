import React from 'react';
import BasicButton from '../BasicButton/BasicButtton';
import DetailedButton from '../DetailedButton/DetailedButton';
import './HomeScreen.css'
import { Card } from 'react-bootstrap';

//passed the state fields from app.tsx as props to the homescreen so they could then be passed down to the button components
export function HomeScreen({ apiKey, page, setPage }: Readonly<{ apiKey: string; page: string; setPage: (newPage: string) => void }>) {

  return (
    <div className="Container">
      <div className="Title">
        <h1>Discover your dream <span style={{ color: '#6923ff' }}>Career</span></h1>
      </div>
      <div className="card-container">
        <Card style={{ color: 'white', backgroundColor: '#21273b' }}>
          <Card.Header style={{ fontSize: 18, fontWeight: 'bold', padding: "1rem 0rem" }}>Basic Quiz</Card.Header>
          <Card.Body >
            <Card.Text className='card-desc'>
              If you're looking for a quick quiz use this choice! A few brief
              questions with simple answers is all that will be asked to give you an accurate
              option of the ideal career for you! With the power of AI, your answers will be used
              to suggest a job that would make you feel fulfilled.
            </Card.Text>
          </Card.Body>
          <BasicButton apiKey={apiKey} page={page} setPage={setPage}></BasicButton>
        </Card>
        <Card style={{ color: 'white', backgroundColor: '#21273b' }}>
          <Card.Header style={{ fontSize: 18, fontWeight: 'bold', padding: "1rem 0rem" }}>Detailed Quiz</Card.Header>
          <Card.Body >
            <Card.Text className='card-desc'>
              If you want a more in depth assessment of the career that you were made for, choose this quiz! You will be asked
              more in depth questions and provoke more thoughts about your interests and personality.
              This quiz will also use AI to refine your answer even further and give a more specific
              answer.
            </Card.Text>
          </Card.Body>
          <DetailedButton apiKey={apiKey} page={page} setPage={setPage}></DetailedButton>
        </Card>
      </div>
    </div>
  )
}
