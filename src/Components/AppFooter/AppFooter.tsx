import React from 'react';
import { Button, Form, OverlayTrigger, TooltipProps, Tooltip, InputGroup } from 'react-bootstrap';
import './AppFooter.css';
import { BsGithub } from 'react-icons/bs';

const AppFooter = ({ changeKey, handleSubmit }: {
  changeKey: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: () => void
}) => {
  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>Click to see our source code</Tooltip>
  );

  return (
    <div className='container0'>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <a href="https://github.com/MichaelLutz1/starter_helpi" target="_blank" rel="noreferrer">
          <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
            <BsGithub />
          </Button>
        </a>
      </OverlayTrigger>
      <Form>
        <InputGroup>
          <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }} className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </InputGroup>
      </Form>
      <div className='names-container'>
        <span>Made by: </span>
        <a href="https://github.com/Mforte5115" target="_blank" rel="noreferrer" className='gh-profile'>Michael Forte</a>,
        <a href="https://github.com/MichaelLutz1" target="_blank" rel="noreferrer" className='gh-profile'> Michael Lutz</a>,
        <a href="https://github.com/jacobwilbe" target="_blank" rel="noreferrer" className='gh-profile'> Jacob Wilber</a>,
        <a href="https://github.com/ColinP5" target="_blank" rel="noreferrer" className='gh-profile'> Colin Parsons</a>
      </div>
    </div>
  );
};

export default AppFooter;
