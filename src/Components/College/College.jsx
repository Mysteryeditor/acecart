import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/College.css';
import Carousel from 'react-bootstrap/Carousel';


const College = () => {
  const [college, setCollege] = useState([]);
  const [collegeCarousels,setCollegeCarousels] = useState([]);

const clgMatUrl="http://localhost:4000/CollegeMaterials";
const clgCarUrl="http://localhost:4000/CollegeCarousel";
  const fetchData = (url) => {
    fetch(url)
      .then((response) => {
        console.log(response)
        return response.json()
        
      })
      .then((data) => {
        setCollege(data);
        console.log(data)
      });
  }

  useEffect(() => {
   
    fetchData(clgCarUrl);
    
  }, [])

  useEffect(() => {
   
    fetchData(clgMatUrl)
    
  }, [])
  


  return (
    <div >
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
          <div className='container Comfy '>
            <div>  .</div>
            <div className='comfy-contents text-center '>
              <h6>THE ACECRAFT FIT</h6>
              <h1 className='comfy-title w-50 '>Comfy.
                Very comfy.</h1>
              <h6 className='comfy-subtitle'>It’s not just the fabric - it’s also the fit.

                The shoulders and sleeves fit right while the body feels relaxed, making it undoubtedly the best.</h6>

            </div>
          </div>
          <div className='AIpower  container'>
          {collegeCarousels.length>0 &&(
                    <div className='row '>
{collegeCarousels.map((collegeCar)=>(
  <>
  <div className='col-lg-6 ' key={collegeCar.id}>
  <h1>Your pre-trial.
  Powered by our AI.</h1>
  <h6></h6>
                        </div>
                        <div className='col-lg-6 '>
                        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
                        </div>
                        </>
))}


                    
                    </div>
                    )}
          </div>

        </div>



      </Container>
    </div>
  )
}

export default College