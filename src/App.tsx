import React, { useState } from 'react';
import './App.css';
import Navbar2 from './Components/Navbar/Navbar'
import { HomeScreen } from './Components/HomeScreen/HomeScreen';
import AppFooter from './Components/AppFooter/AppFooter';
import { BasicPage } from './Components/BasicPage/BasicPage';
import { DetailedPage } from './Components/DetailedPage/DetailedPage';
import { AboutPage } from './Components/AboutPage/AboutPage'


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

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>(pageData); //for page navigation

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
      <Navbar2 page={page} setPage={changePage}></Navbar2>
      {page === "Home" && <HomeScreen page={page} setPage={changePage}/>}
      {page === "Basic" && <BasicPage/>}
      {page === "Detailed" && <DetailedPage/>}
      {page === "About" && <AboutPage/>}
      <AppFooter changeKey={changeKey} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
