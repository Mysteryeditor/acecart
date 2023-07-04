import React from 'react'
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/orderStatus.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const OrderStatus = () => {
    return (
        <div className='orderStatus'>
            <div className='container'>
            <div className='row p-5 '>
                <div className='col-lg-6 '>
                 <div className='findYourOrderStatus d-flex justify-content-end pe-3 pt-5 mt-5'>
                        <h2 className='ProximaThin col-lg-2 '>Find
                            Your
                           <span className='ProximaBold'> Order</span></h2>
                           </div>
                </div>
                <div className='col-lg-6 pt-3 pb-5'>
                    <h2 className='ProximaBold shippingNumber'>Look it up with your shipping number.</h2>
                    <MDBInput className='mdInput'  id='typeText' type='text' />
                    <Button className='contOrderStatus bg-black my-3 w-50 text-center' type="submit">
                                Continue
                            </Button>
<div className='Proxima'>
                            <p >Wish to track your order with your Order ID? <Link to='/signIn' className='text-decoration-none'>Login</Link></p>
                    <p>Need more information? <Link to='/signIn' className='text-decoration-none'>Get In Touch</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OrderStatus