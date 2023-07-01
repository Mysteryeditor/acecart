import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Components/FirstSection';
import reportWebVitals from './reportWebVitals';
import SecondSection from './Components/SecondSection';
import SchoolPage from './Components/SchoolPage/SchoolPage'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NotesBlogs from './Components/Notes/Blogs';
import Error404 from './Components/AirenMask/Error404'
import College from './Components/College/College';
import FooterNavBar from './Components/FooterNavBar';
import Enterprise from './Components/Enterprise/Enterprise';
import SignIn from './Components/SettingComponents/Login';
import Register from './Components/SettingComponents/Register';
import Login from './Components/SettingComponents/Login';
import SchoolUniforms from './Components/SchoolPage/SchoolPageTwo';
import SchoolUniformProducts from './Components/SchoolPage/SchoolProductsSecond';
import { CartProvider } from 'react-use-cart';
import Cart from './Components/Cart/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <BrowserRouter>
    <HomePage />

    <Routes>
      
      <Route exact path='/' element={<SecondSection />} />
      <Route path="/school" element={<SchoolPage />} />
      <Route path="/college" element={<College />} />
      <Route path="/Enterprise" element={<Enterprise />} />
      <Route path="/notes" element={<NotesBlogs />} />
      <Route path="/airenmask" element={<Error404 />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/orderStatus" element={<Error404 />} />
      <Route path="/contact" element={<Error404 />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/schoolUniforms' element={<SchoolUniforms/>}/>
      <Route path='/schooluniformproduct' element={<SchoolUniformProducts/>}/>
      <Route path="/schooluniformproduct/:id" element={<SchoolUniformProducts/>} />
      <Route path='/cart' element={<Cart/>}/>
      </Routes>

    <FooterNavBar />
  </BrowserRouter>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();