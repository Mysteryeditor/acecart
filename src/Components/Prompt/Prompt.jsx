import React from 'react'
import { Link } from 'react-router-dom'

const Prompt = () => {
  return (
    <div className='container Proxima vh-100'>
        <h1 className='m-5 text-center'>You have to login first to add items into the cart <br/> Thank You :)</h1>
        <Link to='/signIn' className='text-decoration-none d-flex justify-content-center'><button className='bg-black border-0 text-white Proxima my-5 p-2'>Go to login page</button></Link>
    </div>
  )
}

export default Prompt