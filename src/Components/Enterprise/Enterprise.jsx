import React from 'react'
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/Enterprise.css';
import { Card, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TimeLineFunc from './TimelineComponent';


const Enterprise = () => {
  const [cards, setCards] = useState([]);
  const [timeLines,setTimeLines] = useState([])
  const a =[1,2,3,4,5,6]


  



  const fetchData = () => {
    fetch("http://localhost:4000/WorkRelaxCards")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])



  
  return (
    <>
      <div className=''>
        <div className='fixBack'>
          <div className='bg-white pt-2   text-center container-fluid'>
            <img src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/honda.png" className='col-lg-2' alt="" />
            <h6 className='honda pt-2'>HONDA CAR'S DEALER MANPOWER UNIFORM</h6>
          </div>

          <div className='workwear  d-flex justify-content-center align-items-center'>
            <div>
              <h3>Workwear that works.</h3>
              <span className=' d-flex justify-content-center'><i class="fa-solid fa-angle-down"></i> </span>
            </div>
          </div>
        </div>



        <div className='workRelaxed text-center'>
          <div className='p-5'>
            <h1 id='workRelax'>Work Relaxed.</h1>
            <p>When we designed our uniforms, we wore them to work every day.</p>
            <p>We still do. They’re comfy, relaxed and designed to suit your workplace.</p>

          </div>


          {cards.length > 0 && (
            <Container >
              <div className='row justify-content-center'>
                {cards.map((card) => (

                  <Card key={card.id} className='mx-4 enterpriseCard pt-3' style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'fill', backgroundPosition: 'center' }}>
                    <Card.Body>
                      <Card.Subtitle className="mt-5 text-muted">{card.title}</Card.Subtitle>
                      <Card.Title className='display-6'>{card.subtitle}</Card.Title>
                    </Card.Body>
                  </Card>

                ))}
              </div>
            </Container>
          )}
        </div>

        <div className='bg-black'>
          <h1 className='howWeDoIt'>This is how we do it.</h1>
          <div className="card flex flex-column gap-3">
     
<Container>
          <TimeLineFunc></TimeLineFunc>
          </Container>
{/* 
{timeLines.length > 0 &&(
<div>
  {timeLines.map((timeLine)=>(

    <div key={timeLine.id}>
    <Timeline value={a}  layout="horizontal" marker={a[0]} align="top" content={(item) => item} />
    </div>
  ))}

  
</div>
)} */}
  </div>

           
           
        </div>
        </div>





      
    </>
  )
}

export default Enterprise