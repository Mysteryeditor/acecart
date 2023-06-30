
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
const SchoolUniformProducts = () => {

   
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [schoolProd,setSchoolProd] = useState(null)
     
        const onBackClick=(e)=>{
         e.preventDefault();
         navigate("/school")
        }
        
       
        useEffect(() => {
        
            fetch(`http://localhost:4000/uniforms/${id}`)
          
            .then((response) => response.json())
            .then((data) => {console.log(data) 
              setSchoolProd(data)
            }
            
            );
            console.log("The id is"+id)
          

         
              
      }, [id]);

  return (
    <div>
    {schoolProd&&
    <Container>
      <div className='row pt-5 mt-5'>
<div className='col-lg-6 col-md-6 col-sm-6 col-xl-6 pt-5 mt-5'>
  <img src={schoolProd.image} alt="Dress Image" />
</div>
<div className='col-lg-6 col-md-6 col-sm-6 col-xl-6'>
<h1>CIS Royal Day Wear (Grade 1-5)</h1>
</div>
   
      </div>
      </Container>
    }
        <button onClick={onBackClick}>Go back to the uniforms</button>
    </div>
  )
 
}


export default SchoolUniformProducts