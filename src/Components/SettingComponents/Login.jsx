// import axios from 'axios';
// import React, { useState } from 'react';

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Fetch user details from the server
// fetch('http://localhost:4000/NewUser')
// .then((response) => response.json())
// .then((data) => {
//   const foundUser = data.find((user) => user.email === username && user.password === password);

//   if (foundUser) {
//     // Login successful
//     console.log('Login success');
//   } else {
//     // Login failed
//     console.log('Login failed');
//   }
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// };
//   };

//   return (
//     <div className='container border-1 border' id='cont'>
//       <div className='row'>
//         <div className='col-12 py-5 shadow mb-5'>
//           <h2>Login with Acecraft</h2>
//           <form className='login-form' onSubmit={handleLogin}>
//             <div className='form-group'>
//               <label htmlFor='username'>Username:</label>
//               <input
//                 type='text'
//                 id='username'
//                 name='username'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             <div className='form-group'>
//               <label htmlFor='password'>Password:</label>
//               <input
//                 type='password'
//                 id='password'
//                 name='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button className='bg-black text-white' type='submit'>
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import React from 'react';
import { Card } from 'react-bootstrap';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/signIn.css'
import { useState } from 'react';


const Login = () => {
    const [uname,setUname]=useState('');
    const [pwd,setPwd]=useState('');
    


    const fetchData=(e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/register')
        .then((response) => response.json())
        .then((data) => {
            
          const foundUser = data.find((user) => user.fname === uname && user.password === pwd)
         


          if (foundUser) {
            // Login successful
            console.log('Login success');

          } else {
            // Login failed
            console.log('Login failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });


      
      }
     
  
  
    return (
        <div className=''>
            <div className='justify-content-center d-flex text-center vh-100 m-5 border-4'>
                <Card className='col-lg-4 shadow border-0'>

                    <Card.Body>
                        <form action="" onSubmit={fetchData}>
                        <h1 className='loginh1'>Login with ACECRAFT</h1>
                        <div>
                        <input className='my-4 loginInput' id='uname' type="text" placeholder='Username' value={uname} onChange={(e)=>setUname(e.target.value)}/>
                        </div>
                        <div>
                        <input type="password " className='loginInput' id='pwd' placeholder='password' value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                        </div>

                    <button type='submit' className='logInButton bg-black mt-3'>Login</button>
                    </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Login