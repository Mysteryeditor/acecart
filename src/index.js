import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Components/FirstSection';
import reportWebVitals from './reportWebVitals';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/NavList';
import FourthSection from './Components/FourthSection';
import FifthSection from './Components/FifthSection';
import SchoolPage from './Components/SchoolPage/SchoolPage'
import { BrowserRouter } from 'react-router-dom';
import SchoolPageTwo from './Components/SchoolPage/SchoolPageTwo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
<HomePage/>
<SecondSection/>
<SchoolPage/>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
