import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/SchoolPage.css'
const SchoolPage = () => {
  const [schools,setSchools]= useState([])
const schoolnames =()=>{
  axios.get("http://localhost:4000/Schools")
  .then((response)=>{
setSchools(response.data)
  })
}
useEffect(()=>{
  schoolnames();
},[])

  return (
    <div className='schoolMainDiv'>
     


              <div className='schoolFixBack'>
          <div className='bg-white pt-2   text-center container-fluid'>
          {schools.length>0&&(
      <div className='bg-white container-fluid col-lg-6  justify-content-center d-flex '>
{schools.map((school)=>(
  <>
  <div className='schoolDiv'> 
        <img src={school.image} className='schoolImage mx-4'  alt="" />
        
        <h6 className='schoolName text-center'> {school.name} </h6>
        </div>
    </>
        ))}
      </div>
      )}
          </div>

          <div className='workwear  d-flex justify-content-center align-items-center'>
            <div>
              <h3 className='designUni'>Designer uniforms <span className='fordoers'>for the doers.</span></h3>
              <span className=' d-flex justify-content-center'><i class="fa-solid fa-angle-down"></i> </span>
            </div>
          </div>
        </div>
        <div className='bg-black AestheticDiv'>
          <h1 className='Aesthetic text-center container '>Aesthetically advanced,</h1>
          <h1 className='Aesthetic text-center container '>our designer uniforms are <span className='aestheticSpan'>a cut above the rest,</span></h1>
          <h1 className='Aesthetic text-center container '><span className='aestheticSpan'>in every sense of the word.</span></h1>

        </div>

        <div className='perfectionForDelivery '>
        <div className='text-center text-black perfectDesignUniform '>
              <h3 className='designUni'>Perfection. Now <span className='fordoers'>delivering to your doorstep.</span></h3>
              <span className=' d-flex justify-content-center'><i class="fa-solid fa-angle-down"></i> </span>
            </div>
<div className='hassle'>
            <h1 className='text-center text-black perfect'>Less <span className='perfectBold'>hassle.</span> More <span>hustle.</span></h1>
            <h1 className='text-center text-black perfect'>Our end-to-end e-commerce facility with</h1>
            <h1 className='text-center text-black perfect'><span className='perfectBold'>superior technology enables us to</span></h1>
            <h1 className='text-center text-black perfect'><span className='perfectBold'>deliver your order right to your doorstep.</span></h1>
            </div>
        </div>

<div className='beAtEase'>
  <h1 className='beatease'>Be at ease.</h1>
  <h1>Everyday.</h1>
<p>Our uniforms keep your children looking great</p>
<p>from the first day of school until the end-of-the-year picnic.</p>


</div>
    </div>
  )
}

export default SchoolPage