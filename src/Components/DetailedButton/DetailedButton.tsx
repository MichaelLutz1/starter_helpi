import { Button } from 'react-bootstrap';
import './DetailedButton.css';
import React from 'react';


export default function DetailedButton({ apiKey, page, setPage }: { apiKey: string; page: string; setPage: (newPage: string) => void }): JSX.Element {
    //passed state as props to button component so that detailed page could be rendered on click
    const handleClick = () => {
        if (apiKey === '') {
            alert("Please enter an API key in the Home page before taking the quiz.");
            return;
        }
        setPage("Detailed");
    }
    return (
        <div>
            <Button style={{ borderColor: '#6923ff', backgroundColor: '#6923ff', margin: '1rem' }} onClick={handleClick}>Take Quiz!</Button>
        </div>
    )
}
