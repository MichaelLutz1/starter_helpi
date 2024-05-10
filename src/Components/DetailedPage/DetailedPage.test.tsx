import { render, screen } from "@testing-library/react";
import { DetailedPage } from "./DetailedPage";


interface QuestionData {
    question: string;
    answer: string;
  }


  const detailQuestions = [
    'What subjects or activites were you most interested in during your school years?',
    'Describe an accomplishment or project that you are particularly proud of. What did it involve?',
    'What are the top three tasks you enjoy doing the most in your current or past jobs?',
    'What work environment do you thrive in? For example, fast-paced, structured, autonomous, etc.',
    'If you had unlimited resources, what kind of work would you want to do?',
    'Can you identify any industries or careers that you have always found intriguing? Why?',
    'What are your long-term career goals? Where do you see yourself in five to ten years?'
  ];

let detailData = Array.from(detailQuestions, (question: string) => ({ question: question, answer: '' })) as QuestionData[];

describe("DetailedPage Component tests", () => {
    test("Detail Questions page has 7 text area for input", () => {
        const setPage = jest.fn(); 
        const setDetail = jest.fn();
        render(<DetailedPage page={"Home"} setPage={setPage} savaDetailDataKey={"BASIC_DATA"} detailQuestionData={detailData} setDetailQuestionData={setDetail}/>);
        const sliders = screen.getAllByRole("textbox");
        expect(sliders.length).toEqual(7);
    });
});

