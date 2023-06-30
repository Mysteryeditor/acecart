
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/SchoolProductsSecond.css'
const SchoolUniformProducts = () => {

   
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [schoolProd,setSchoolProd] = useState(null)
  const [carImg,setCarImg]= useState(null)   
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
            
            fetch(`http://localhost:4000/uniforms`)
          
            .then((response) => response.json())
            .then((data) => {console.log(data) 
              setCarImg(data)
            } )
            .catch((err)=>{
              console.log(err)
            })
            
           
            console.log("The id is"+id)
          

         
              
      }, [id]);




  return (
    <div>
    {schoolProd&&

  
    <div>
      {schoolProd.image}
      <Container>
      <div className='row pt-5 mt-5'>
<div className='col-lg-6 col-md-6 col-sm-6 col-xl-6 pt-5 mt-5'>
  <img src={schoolProd.image} alt="Dress Image" />
</div>
<div className='col-lg-6 col-md-6 col-sm-6 col-xl-6 pt-5 mt-5 text-black'>
<h1>{schoolProd.title}</h1>
<h5>Product code: {schoolProd.productcode}</h5>
<h5>Brand: {schoolProd.brand}</h5>
<h5>Sold By: {schoolProd.soldby}</h5>
<h1>&#8377;{schoolProd.cost}<span className='h5'><del>&#8377;{schoolProd.actualcost}</del></span></h1>
<h6>{schoolProd.offer}% OFF</h6>

<hr />

<button className='bg-black text-white'>SIZE GUIDE</button>
<select className='w-25 text-start' name="size" id="size">
  {schoolProd.size.map((size)=>(
    <option value={`${size}`}>{size}</option> 
  ))}
</select>
<span>{schoolProd.stock} item left in Stock</span>

<hr />
<label className='bg-black text-white p-1' htmlFor="quantity">Quantity</label><input type="number" name="qty" id="quantity" />

<div className='row container pt-5 mt-5'>
<button className='col-lg-4 me-1 bg-black text-white'>Add to Cart</button>
<button className='col-lg-4 ms-1 bg-black text-white'>Buy Now</button>

</div>



</div>
   
      </div>
      <div>

  <div className='bg-light p-2'>Description of product</div>
  <div className='p-2'>
  <h5 >NO RETURNS & NO EXCHANGE.</h5>
  <p >{schoolProd.material}</p>
  </div>
</div>

      </Container>

      </div>    

    
    }

    
<div className='products container'>
  <div className='bg-light p-2'>Related Products</div>
<div>
{carImg &&

<Carousel>

{carImg.map((carImg)=>(
      <Carousel.Item>
     
        <Container>
        <div className='row d-flex justify-content-center '>
          <div className="col-lg-2 col-sm-2 col-md-2 col-xl-2">
        <img
          className="col-lg-12 col-sm-12 col-md-12 col-xl-12"
          src={`${carImg.image}`}
          alt="First slide"
        /> 
        <h6 className='text-center'>{carImg.name}</h6>
        </div>
          

  </div>
  </Container>
    
        
      </Carousel.Item>
  ))}
     
    </Carousel>
  }
</div>

</div>

        <button onClick={onBackClick}>Go back to the uniforms</button>
    </div>
  )
 
}


export default SchoolUniformProducts