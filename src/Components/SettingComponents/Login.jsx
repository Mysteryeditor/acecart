import React from 'react';
import { Card } from 'react-bootstrap';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/signIn.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SecondSection from '../SecondSection'
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
const Login = () => {
  const history = useNavigate()
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const [id,setId] = useState('')
  const myToastFail = () => toast.error('Please check the username and the password!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton:false,
    theme:"colored"
  });
  const myToastPass = ()=> toast.success("Successfully logged in",{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton:false,
    theme:"colored"
  })


  const fetchData = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/register')
      .then((response) => response.json())
      .then((data) => {

        const foundUser = data.find((user) => user.email === uname && user.password === pwd)
      const [formData, setFormData]=useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        category: '',
        dname: '',
        dcode: '',
        city: '',
        state: '',
        gst: ''
      })


        if (foundUser) {

          // const xhttp = new XMLHttpRequest();
          // xhttp.open("PUT",`http://localhost:4000/register/1`)
          // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

          // xhttp.send(
          //   JSON.stringify({
          //     isLogged:true
          //   })
          // );



          // xhttp.onreadystatechange=function (){
          //   if(this.readyState == 4 && this.status == 200){
          //     console.log(this.responseText);
              
          //   }
          // }
// console.log("Founde user is  ")
axios.get(`http://localhost:4000/register?email_like=${uname}`)
.then((response)=>{
  
setId(response.data[0].id)
  console.log("ID value is"+id)
})
          axios.put(`http://localhost:4000/register/${id}`,{
            fname,
  lname,
  email,
  password,
  category,
  dname,
  dcode,
  city,
  state,
  gst,
  isLogged: true
          
          })
          .then((response)=>{
            if(response.data.status===true){
              myToastPass();
            }else console.log("Operation was unsuccessful")
          })
          .catch(err => console.error("Wasn't able to update property.", err))
          
          console.log('Login success');

       
          // history("/")
        } else {
          console.log('Login failed');
          myToastFail();
          // alert("Password or the user name is invalid")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })



  }



  return (
    <div className=''>
      <div className='justify-content-center d-flex text-center vh-100 m-5 border-4'>
        <Card className='col-lg-4 shadow border-0'>

          <Card.Body>
            <form action="" onSubmit={fetchData}>
              <h1 className='loginh1'>Login with ACECRAFT</h1>
              <div>
                <input className='my-4 loginInput' id='uname' type="email" placeholder='Username' value={uname} onChange={(e) => setUname(e.target.value)} />
              </div>
              <div>
                <input type="password " className='loginInput' id='pwd' placeholder='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
              </div>

              <button type='submit' className='logInButton bg-black mt-3'>Login</button>
            </form>
          </Card.Body>
        </Card>
          <ToastContainer />
          


      </div>
    </div>
  )
}

export default Login