import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainToast = (prop) => {


     const myToast = () => toast.success("Successfully created an account",{
        position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    closeButton:false,
    theme:"colored"
    })
      
  const myToastFail = () => toast.error('Please check the username and the password!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
    theme: "colored"
  });
  const myToastPass = () => toast.success("Successfully logged in", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
    theme: "colored"
  })
  if(prop==="Account created"){
    return (
    
        myToast()
     
   )
  }else if(prop==="Wrong credentials"){
    return (
        myToastFail()
    )
  }else if(prop==="Logged In"){
    return (
        myToastPass()
    )
  }
 
}

export default MainToast