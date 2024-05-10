import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicPage } from "./BasicPage";

interface QuestionData {
    question: string;
    answer: string;
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
let basicData = Array.from(questions, (question: string) => ({ question: question, answer: "" })) as QuestionData[];
describe("HomeScreen Component tests", () => {
    test("Basic Questions page has 7 inputs", () => {
        const setPage = jest.fn(); 
        const setBasic = jest.fn();
        render(<BasicPage page={"Home"} setPage={setPage} setBasicDataKey={"BASIC_DATA"} basicQuestionData={basicData} setBasicQuestionData={setBasic}/>);
        const sliders = screen.getAllByRole("slider");
        expect(sliders.length).toEqual(7);
    });
});
