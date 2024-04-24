import { BsInfo } from 'react-icons/bs';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function AboutButton({page, setPage}: {page:string; setPage: (newPage: string) => void}): JSX.Element {
    //passed state as props to button component so that detailed page could be rendered on click
    return (
        <div>
            <Button onClick={() => setPage("About")} style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
                <BsInfo />
            </Button>
        </div>
    )
}
