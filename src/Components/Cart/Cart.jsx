import React from 'react'
import { useCart } from 'react-use-cart'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Cart = () => {
    const {  isEmpty,updateItemQuantity,removeItem,totalItems,totalUniqueItems,cartTotal  } = useCart()
    const [id,setId]=useState('');
    const [cartProducts,setCartProducts]=useState('')
    const [quantity,setQuantity]=useState(1)

   const handleIncrement=()=>{
    setQuantity((e)=>e+1)
   }
   const handleDecrement=(e)=>{
    if(e!=1){
  setQuantity((e)=>e-1)
}

   }
   
   

    
    useEffect(()=>{
        const fetchData=()=>{
            axios.get("http://localhost:4000/register?isLogged_like=true")
            .then((response)=>{
                setId(response.data[0].id)
                setCartProducts(response.data[0].cart)
            
            })
           
        }
        fetchData()
    },[])
  return (
    <div>
        <Container>
        <h1 className='text-center p-4 Proxima'>Your bag total is &#8377;{cartTotal }</h1>

        <hr />
        <div>
                <div key={cartProducts.id} className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xl-4'>
                        <img src={`${cartProducts.image}`} alt="" />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xl-4'>
                            <h4 className='ProximaBold'>{cartProducts.title}</h4>
                        </div>
                        <div className='col-lg-2 col-sm-2 col-md-2 '>
                        <button onClick={(e)=>updateItemQuantity(cartProducts.id,totalItems-1)}>-</button><label onChange={(e)=>e.target.value}>{totalItems}</label><button onClick={(e)=>updateItemQuantity(cartProducts.id,totalItems+1)}>+</button>
                        </div>
                    </div>
               

                </div>
        </div>





        </Container>
    </div>
  )
}

export default Cart