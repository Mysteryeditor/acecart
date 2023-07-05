import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../../CssFiles/College.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



const College = () => {
  const [college, setCollege] = useState([]);
  const [collegeCarousels, setCollegeCarousels] = useState([]);

  // const clgMatUrl = "http://localhost:4000/CollegeMaterials";
  // const clgCarUrl = "http://localhost:4000/CollegeCarousel";
  const fetchData = () => {
    fetch("http://localhost:4000/CollegeMaterials")
      .then((response) => {
        console.log(response)
        return response.json()

      })
      .then((data) => {
        setCollege(data);
        console.log(data)
      });
  }

  const fetchData2 = ()=>{
    fetch("http://localhost:4000/CollegeCarousel")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setCollegeCarousels(data);
     })
  }

  useEffect(() => {
    fetchData();
    fetchData2();
  }, [])





  return (
    <div className='collegeMaindiv'>
      <Container fluid>

        <div className='collegeHeader row '>
          <div className='col-lg-6'>

          </div>
          <div className='collegeHeaderTitles col-lg-6 pt-5 '>
            <h1 className=' text-end  ' id='collegeHeaderTitles1'>The acecraft Collection.</h1>

            <h5 className='d-flex justify-content-end collegeHeaderTitles2'>Simple. Sharp.</h5>
            <h5 className='d-flex justify-content-end collegeHeaderTitles2'>Detailed perfection that makes you</h5>
            <h5 className='d-flex justify-content-end collegeHeaderTitles2'>look good and feel great. Put it on. It's like magic.</h5>
            <h4 id='collegeHeaderTitles3' className='d-flex justify-content-end pt-2 '>Classic <span className='px-5'>|</span> Absolute <span className='px-5'>|</span>  Signature</h4>


          </div>

        </div>




        <div className='collegeSecondSection '>

          {college.length > 0 && (
            <div >

              {college.map((collegeSingle) => (
                <div key={collegeSingle.id}>
                  {collegeSingle.id === 1 ? (
                    <>
                      {console.log(collegeSingle.id)}
                      <img className='collegeSingleImage ' src={collegeSingle.image} alt="wollen-image" />

                      <h1 className='collegeSingletitle text-center'>{collegeSingle.title}</h1>
                      <p className='text-center mx-auto w-25 collegeSingleContent'>{collegeSingle.content}</p>
                    </>
                  ) : collegeSingle.id % 2 === 0 ? (
                    <>


                      <div className='row'>
                        <div className='col-lg-6 mt-5'>
                          <img className='collegeSingleImageOddEven' src={collegeSingle.image} alt="wollen-image" />
                        </div>
                        <div className='col-lg-6 mt-5'>
                          <h1 className='collegeSingletitle text-center'>{collegeSingle.title}</h1>
                          <p className=' mx-auto w-50 collegeSingleContent'>{collegeSingle.content}</p>
                        </div>

                      </div>
                    </>
                  ) : (
                    <>
                      {console.log("College single is " + collegeSingle.id)}
                      <div className='row'>
                        <div className='col-lg-6 mt-5'>
                          <h1 className='collegeSingletitle text-center'>{collegeSingle.title}</h1>
                          <p className=' mx-auto w-50 collegeSingleContent'>{collegeSingle.content}</p>
                        </div>
                        <div className='col-lg-6  mt-5'>
                          <img className='collegeSingleImageOddEven' src={collegeSingle.image} alt="wollen-image" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

              ))}

            </div>




          )}
          <div className='container Comfy mt-5'>
            <div>  .</div>
            <div className='comfy-contents text-center '>
              <h6>THE ACECRAFT FIT</h6>
              <h1 className='comfy-title w-50 '>Comfy.
                Very comfy.</h1>
              <h6 className='comfy-subtitle'>It’s not just the fabric - it’s also the fit.

                The shoulders and sleeves fit right while the body feels relaxed, making it undoubtedly the best.</h6>

            </div>
          </div>
          <div className='AIpower  -fluid mt-5 pt-5 bg-black'>
            <Container>
              <div className='row '>
               
                    <div className='col-lg-6 mt-5' >
                      <h1 className='col-lg-8'>Your pre-trial.
                        Powered by our AI.</h1>
                      <h6 className='col-lg-8 aipowerh6'>The acecraft Measurement Process is one among the world's most accurate methods. We set up a pre-trial event in your campus and make each one try on the right fit. No more guessing the right size business.</h6>
                    </div>
                   
                   
                    
                    <div className='col-lg-6'>
    <Carousel controls>
      {collegeCarousels.map((collegeCar) => (

        
        <Carousel.Item key={collegeCar.id} interval={10000}>
          <img
            className="d-block w-100"
            src={collegeCar.image}
            alt="Carousel slide"
          />
         
        </Carousel.Item>
      ))}
    </Carousel>
 
</div>

               
            


              </div>
              </Container>
          </div>

        </div>



      </Container>
<div className='getInTouch'>

<Container fluid>
  <div className='row getInTouchrow'>
    <div className='col-lg-12 d-flex justify-content-center align-items-center'>
    <div className='text-center  d-block'>
              <h3>Designer Uniforms</h3>
              <div className='d-flex justify-content-center'>
              <h5 className='getInTsouchSpans'>________</h5><h2 id='by' className='mx-2'> by </h2>  <h5 className='getInTosuchSpans'>________</h5>
              </div>
              <h3 className='ace'>acecraft</h3>
             <Link to='/GetInTouch'><button className='GIT text-white p-1 px-2 border-2 border-white bg-transparent '>Get In Touch</button></Link>

              </div> 
    </div>

  </div>
  </Container>                                                             
</div>



    </div>
  )
}

export default College