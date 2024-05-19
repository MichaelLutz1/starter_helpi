import React, { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import './Rangeslider.css'

type RangeSliderProps = {
    handleChange: (question: string, resp: string) => void;
    question: string
    numresp: string 
    rangeValues: Record<string, string>
}
const RangeSlider: FunctionComponent<RangeSliderProps> = ({handleChange, question, rangeValues, numresp}) => {
  const [range, setRange] = React.useState(numresp);
  
  return (
    <Form.Group >
      <div className="flexbox">
        {range === "1" ? <span style = {{color: '#6923ff', fontWeight: 'bold'}}>Disagree</span> : <span style = {{color: 'white', fontWeight: 'bold'}}>Disagree</span>}
        {(range !== "1" && range !== "5") && <span style = {{color: 'white', fontWeight: 'bold'}}>{rangeValues[range]}</span>}
        {range === "5" ? <span style = {{color: '#6923ff', fontWeight: 'bold'}}>Agree</span> : <span style = {{color: 'white', fontWeight: 'bold'}}>Agree</span>}
      </div>
      <Form.Control
          style ={{background: 'black'}}
          value={range}
          type="range"
          min={1} 
          max={5} 
          step={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newRange = e.target.value;
            setRange(newRange);
            handleChange(question, newRange);
          }}
      />
    </Form.Group>
  );
};

export default RangeSlider;
