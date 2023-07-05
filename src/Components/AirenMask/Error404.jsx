import React from 'react'
import { Link } from 'react-router-dom'
import '../../CssFiles/AirenMask.css'
import { Container } from 'react-bootstrap'
const Error404 = () => {
  return (

    <div className='bg-black vh-100 error pt-4'>
        <Container>
        <h1>Error(404)</h1>
        <h3>Page you are requesting does not exist.</h3>
        <Link to='/Error404' className='goToHomeLink'>Go to Home</Link>
        </Container>
    </div>
  )
}

export default Error404