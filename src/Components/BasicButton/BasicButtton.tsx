import { Button } from 'react-bootstrap';
import './BasicButton.css';
import React from 'react';


export default function BasicButton({ apiKey, page, setPage }: { apiKey: string; page: string; setPage: (newPage: string) => void }
    //passed state as props so that the basic page could be rendered on click
): JSX.Element {
    const handleClick = () => {
        if (apiKey === '') {
            alert("Please enter an API key before taking the quiz.");
            return;
        }
        setPage("Basic");
    }
    return (
        <div>
            <Button style={{ borderColor: '#6923ff', backgroundColor: '#6923ff', margin: '1rem' }} onClick={handleClick}>Take Quiz!</Button>
        </div>
    )
}


