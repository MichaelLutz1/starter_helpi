import { render, screen, fireEvent} from "@testing-library/react";
import { HomeScreen } from "./HomeScreen";
import { BasicPage } from "../BasicPage/BasicPage";
import { DetailedPage } from "../DetailedPage/DetailedPage";

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


describe("HomeScreen Component tests", () => {
    test("The HomePage contains both buttons", () => {
        render(<HomeScreen page={"Home"} setPage={function (newPage: string): void {
            throw new Error("Function not implemented.");
        } } apiKey={""} />);
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
    test("The HomePage mentions both basic and detailed page", () => {
        render(<HomeScreen page={"Home"} setPage={function (newPage: string): void {
            throw new Error("Function not implemented.");
        } } apiKey={""} />);
        expect(screen.getByText(/Basic Quiz/i)).toBeInTheDocument();
        expect(screen.getByText(/Detailed Quiz/i)).toBeInTheDocument();
    })
    test("The basic button navigate to questions page", () => {
        const setPage = jest.fn();
        const mockApiKey = 'fake-api-key-123';
        render(<HomeScreen apiKey={mockApiKey} page={"Home"} setPage={setPage}/>)
        const setBasic = jest.fn();
        render(<BasicPage page={"Home"} setPage={setPage} setBasicDataKey={"BASIC_DATA"} basicQuestionData={basicData} setBasicQuestionData={setBasic}/>);
        const buttons = screen.getAllByRole("button", { name: /Take Quiz!/i })
        fireEvent.click(buttons[0]);
        expect(screen.getByText(/problems:/i)).toBeInTheDocument();
    })
    test("The detailed button navigate to questions page", () => {
        const setPage = jest.fn();
        const mockApiKey = 'fake-api-key-123';
        render(<HomeScreen apiKey={mockApiKey} page={"Home"} setPage={setPage}/>)
        const setBasic = jest.fn();
        render(<DetailedPage page={"Home"} setPage={setPage} savaDetailDataKey={"DETAILED_DATA"} detailQuestionData={detailData} setDetailQuestionData={setBasic}/>);
        const buttons = screen.getAllByRole("button", { name: /Take Quiz!/i })
        fireEvent.click(buttons[1]);
        expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
    })
});