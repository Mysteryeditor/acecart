import React from 'react'
import { Router } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
const SchoolPageTwo = () => {

   
        const params = useParams();
        const navigate = useNavigate();
     
        const onBackClick=(e)=>{
         e.preventDefault();
         navigate("/school")
        }
       

  return (
    <div>
        <h2>Shirt Name{params.name}</h2>
        <button onClick={onBackClick}>Go back to the uniforms</button>
    </div>
  )
 
}


export default SchoolPageTwo