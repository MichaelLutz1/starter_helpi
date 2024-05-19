import React, { useState } from 'react';
import './App.css';
import Navbar2 from './Components/Navbar/Navbar'
import { HomeScreen } from './Components/HomeScreen/HomeScreen';
import AppFooter from './Components/AppFooter/AppFooter';
import { BasicPage } from './Components/BasicPage/BasicPage';
import { DetailedPage } from './Components/DetailedPage/DetailedPage';
import { AboutPage } from './Components/AboutPage/AboutPage'
import { ResultsPage } from './Components/ResultsPage/ResultsPage';

interface QuestionData {
  question: string;
  answer: string;
}


//page navigation: pageData is the default page that will be displayed when the user first opens the site. If the user navigates to a different page, the pageData will be updated to that page.
let pageData = "Home";
const savePageKey = "MYPAGE";
const currPage = sessionStorage.getItem(savePageKey);
if (currPage !== null) {
  pageData = currPage;
}

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
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
const saveBasicDataKey = "BASIC_DATA";
const currBasicData = sessionStorage.getItem(saveBasicDataKey);
if (currBasicData !== null) {
  basicData = JSON.parse(currBasicData) as QuestionData[];
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
const saveDetailedDataKey = "DETAILED_DATA";
const currData = sessionStorage.getItem(saveDetailedDataKey);
if (currData !== null) {
    detailData = JSON.parse(currData) as QuestionData[];
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>(pageData); //for page navigation
  const [detailQuestionData, setDetailQuestionData] = React.useState(detailData);
  const [basicQuestionData, setBasicQuestionData] = React.useState(basicData);

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function changePage(newPage: string) {
    sessionStorage.setItem(savePageKey, newPage);
    setPage(newPage);
  }
  return (
    //renders the components corresponding to the state of the page
    <div className="App">
      <Navbar2 apiKey={key} page={page} setPage={changePage}></Navbar2>
      {page === "Home" && <HomeScreen apiKey={key} page={page} setPage={changePage}/>}
      {page === "Basic" && <BasicPage setBasicDataKey={saveBasicDataKey} basicQuestionData={basicQuestionData} setBasicQuestionData={setBasicQuestionData} page={page} setPage={changePage}/>}
      {page === "Detailed" && <DetailedPage savaDetailDataKey={saveDetailedDataKey} detailQuestionData={detailQuestionData} setDetailQuestionData={setDetailQuestionData} page={page} setPage={changePage}/>}
      {page === "About" && <AboutPage/>}
      {page === "Results" && <ResultsPage APIKey={key} basicQuestionData={basicQuestionData} detailQuestionData={detailQuestionData} setPage={setPage}/>}
      <AppFooter changeKey={changeKey} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
