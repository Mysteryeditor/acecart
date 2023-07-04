import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/SchoolPage.css'
import { Container } from 'react-bootstrap';
import GetInTouch from '../GetInTouch/GetInTouch';
const SchoolPage = () => {
  const [schools, setSchools] = useState([])
  const [beatease, setBeAtEase] = useState([]);

  const schoolnames = () => {
    axios.get("http://localhost:4000/Schools")
      .then((response) => {
        setSchools(response.data)
      })
  }

  const beAtEaseMapping = () => {
    axios.get("http://localhost:4000/BeAtEase")
      .then((response) => {
        setBeAtEase(response.data)
      })
  }
  useEffect(() => {
    schoolnames();
    beAtEaseMapping();
  }, [])

  return (
    <div className='schoolMainDiv'>



      <div className='schoolFixBack'>
        <div className='bg-white pt-2   text-center container-fluid'>
          {schools.length > 0 && (
            <div className='bg-white container-fluid col-lg-6  justify-content-center d-flex '>
              {schools.map((school) => (
                <>
                  <div className='schoolDiv'>
                    <Link to="/schoolUniforms"><img src={school.image} className='schoolImage mx-4' alt="" /></Link>

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

      <div className='beAtEaseDiv text-end '>
        <h1 className='beatease'>Be at ease.</h1>
        <h1>Everyday.</h1>
        <p>Our uniforms keep your children looking great</p>
        <p>from the first day of school until the end-of-the-year picnic.</p>

        {console.log("Outside the be at ease")}

        {beatease.length > 0 && (
          <div>
            {beatease.map((beEase) => (
              <img key={beEase.id} src={`${beEase.image}`} className='img-fluid col-lg-12' alt="" />
            ))
            }
          </div>
        )
        }



      </div>

      <div className='getInTouchSchool pt-5'>
      <Container fluid >
        
        <GetInTouch  colSize="2" bgColor='bg-black' height="200"/>
     
    </Container>
        {/* <div className='text-center pt-5 d-block'>
          <h3 className='DUSchool pt-5'>Designer Uniforms</h3>
          <div className='d-flex justify-content-center'>
            <h3 className='getInTsouchSpansSchool'>________</h3><h1 id='byschool' className='mx-2'> by </h1>  <h3 className='getInTsouchSpansSchool'>________</h3>
          </div>
          <h3 className='aceSchool '>acecraft</h3>
          <h3 className='establishSchool text-center mt-4 '>Establish a <span className='signatureLookSchool'>signature look</span> for your school.</h3>
        <h3 className='supplyChangeSchool mt-5 '>Looking to change your supplier?</h3>
          <Link to='/ModalGIT' className='text-decoration-none'><div className='justify-content-center d-flex '> <label className='GITSchool  text-white p-1 px-2 mb-2 bg-transparent'>Get In Touch</label></div></Link>

        </div> */}
      </div>
    </div>
  )
}

export default SchoolPage