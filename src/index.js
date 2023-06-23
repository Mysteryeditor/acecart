import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Components/FirstSection';
import reportWebVitals from './reportWebVitals';
import SecondSection from './Components/SecondSection';
import SchoolPage from './Components/SchoolPage/SchoolPage'
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import NotesBlogs from './Components/Notes/Blogs';
import Error404 from './Components/AirenMask/Error404'
import College from './Components/College/College';
import FooterNavBar from './Components/FooterNavBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
<HomePage/>
<Routes>
          <Route exact path='/' element={<SecondSection />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/college" element={<College />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/notes" element={<NotesBlogs />} />
          <Route path="/airenmask" element={<Error404 />} />

        </Routes>

        <FooterNavBar className=""/>    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();