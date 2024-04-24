import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { Form } from "react-bootstrap";
import './Rangeslider.css'


type RangeSliderProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const RangeSlider: FunctionComponent<RangeSliderProps> = ({handleChange}) => {
  
  const rangeValues: Record<string, string> = {
    1: "Strongly Disagree",
    2: "Somewhat Disagree",
    3: "Neither Agree nor Disagree",
    4: "Somewhat Agree",
    5: "Strongly Agree"
  };

  const [range, setRange] = useState("3");

  const handleAnswerUpdate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setRange(event.target.value); 
    handleChange(event as ChangeEvent<HTMLInputElement>);
  };

  return (
    <Form.Group >
      <div className="flexbox">
        {range === "1" ? <span style = {{color: '#6923ff', fontWeight: 'bold'}}>Disagree</span> : <span style = {{color: 'white', fontWeight: 'bold'}}>Disagree</span>}
        {(range !== "1" && range !== "5") && <span style = {{color: 'white', fontWeight: 'bold'}}>{rangeValues[range]}</span>}
        {range === "5" ? <span style = {{color: '#6923ff', fontWeight: 'bold'}}>Agree</span> : <span style = {{color: 'white', fontWeight: 'bold'}}>Agree</span>}
      </div>
      <Form.Control
        style ={{background: 'black'}}
        value={range} // Current value of range slider
        type="range" // Form type
        min={1} // Lowest possible value
        max={5} // Highest possible value
        step={1} // Incremental change of 1
        // Function that is called when the range slider is manipulated
        onChange={event => handleAnswerUpdate(event)}
      />
    </Form.Group>
  );
};

export default RangeSlider;