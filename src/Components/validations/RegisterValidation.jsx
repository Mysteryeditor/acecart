// import axios from "axios";
// import { useEffect } from 'react';
// import  "../SettingComponents/Register";

// export default function RegisterValidate(){
//     console.log(`From register validation ${Fname}`)
    
    
//     // const Fname = document.getElementById("Fname").value;
//     // const Lname = document.getElementById("Lname").value;
//     // const email = document.getElementById("email").value;
//     // const pwd = document.getElementById("pwd").value;
//     // const category = signup.category.value
//     // const dname = document.getElementById("dname").value;
//     // const dcode = document.getElementById("dcode").value;
//     // const city = document.getElementById("city").value;
//     // const state = document.getElementById("state").value;
//     // const gst = document.getElementById("gstnum")
// console.log("Outside the fetch")
//     const fetchData=()=>{
//         axios.post("http://localhost:5000/register",{
//             fname:Fname,
//             lname:Lname,
//             email: email,
//             password:pwd,
//             category:category,
//             dname:dname,
//             city:city,
//             state:state,
//             gst:gst
//         })
//         .then((response)=>{
//             console.log(response)
//         })
//         .then((error)=>{
//             console.log(error)
//         })
//     }
//     useEffect(() => {
//         fetchData();
    
//       }, [])

// }
// RegisterValidate();