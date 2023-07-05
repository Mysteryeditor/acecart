import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '.././CssFiles/NavList.css'
import axios from 'axios';
import { toast } from 'react-toastify';

import { useEffect } from 'react';
const Settings = (e) => {
  // e.preventDefault();
  const [log, setLog] = useState(false)
  const [display, setDisplay] = useState('block')
  const [logoutDisplay,setLogoutDisplay]=useState('none')
  var Fname,Lname,email,password,category,dname,dcode,city,state,gst,id,cart;
  const myToastPass = () => toast.success("Logged out!!!", {
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

const logout=()=>{


  axios.get(`http://localhost:4000/register/?isLogged_like=true`)
            .then((response) => {
              Fname = response.data[0].fname;
              Lname = response.data[0].lname;
              email = response.data[0].email;
              password = response.data[0].password;
              category = response.data[0].category;
              dname = response.data[0].dname;
              dcode = response.data[0].dcode;
              city = response.data[0].city;
              state = response.data[0].state;
              gst = response.data[0].gst;
              cart=response.data[0].cart;
              id=response.data[0].id;

              console.log("ID value is" + id)
            })
          axios.put(`http://localhost:4000/register/${id}`, {
            fname: Fname,
            lname: Lname,
            email: email,
            password: password,
            category: category,
            dname: dname,
            dcode: dcode,
            city: city,
            state: state,
            gst: gst,
            cart:cart,
            isLogged: false

          })
            .then((response) => {
             myToastPass();
            })
            .catch((error) => {
              console.error('Error:', error);
            })
          }

  useEffect(() => {
    axios.get('http://localhost:4000/register/?isLogged_like=true')
      .then((response) => {
        console.log(response.data.length)
        if (response.data.length > 0) {
          setLog(true);
        } else setLog(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (log === true) {
      setDisplay('none');
      setLogoutDisplay('block')
      console.log(display)
    } else {
      setDisplay("block")
      setLogoutDisplay('none')
  }
  }, [log]);
  console.log("Display outside if " + display)
  return (
    <div className='HomeForm text-end' >
      
      <ul className='HomeUlsMain position-absolute ' >
        {console.log(log)}
        
        <li style={{ display: display }}>
          <Link to='/signIn'><label className='HomeUls' >Sign In | <i class="fa-solid fa-right-to-bracket"></i></label></Link>
        </li>
        <li>
          <Link to='/register'><label className='HomeUls' >Register |<i class="fa-solid fa-user-plus"></i></label></Link>
        </li>
        <li>
          <Link to='/orderStatus'><label className='HomeUls' >Order Status | <i class="fa-solid fa-box-archive"></i></label></Link>
        </li>
        <li>
          <Link to='/contact'><label className='HomeUls' >Contact | <i class="fa-solid fa-comments"></i></label> </Link>
        </li>
        <li style={{display:logoutDisplay}}>
          <Link><label onClick={logout} className='HomeUlslogout' >Logout </label> </Link>
        </li>

      </ul>
    </div>
  )
}

export default Settings