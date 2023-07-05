import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css'
import React from 'react'; import { useState } from 'react';
import '../App.css';
import settingImage from '.././Assets/images/setting.png';
import Badge from '@mui/material/Badge';
import Settings from './NavList';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [isHovering, setIsHovering] = useState(false);
  const [cartBadge,setCartBadge] = useState('')
  const handleMouseOver = () => {
    setIsHovering(!isHovering);
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  }
useEffect(()=>{
  axios.get("http://localhost:4000/register?isLogged_like=true")
  .then((response)=>{
    setCartBadge(response.data[0].cart.length)
  })
  .catch((err)=>{
   console.log(err)
  })
},[])

  return (


    <React.Fragment >

      <div className="Navbar sticky-top" >
        <Nav.Link className="acecraftTitle"  as={Link} to='/'>acecraft</Nav.Link>
        <Navbar expand="lg" className='NavbarLinks'  >
          <Container fluid >

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to='/school' className='navLink '>SCHOOL</Nav.Link>
                <Nav.Link as={Link} to='/college' className='navLink '>COLLEGE</Nav.Link>       
                <Nav.Link href="/Enterprise" className='navLink'>ENTERPRISE</Nav.Link>
                <Nav.Link as={Link} to='/notes' className='navLink'>NOTES</Nav.Link>
                <Nav.Link href="/airenmask" className='navLink'>AIREN MASK</Nav.Link>

                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <div className='me-2'>      <img onClick={handleMouseOver} className='settingImage mx-3' sx={{
                "& .settingImage:hover": {

                }
              }} src={settingImage} alt="" />    
              
              <Link to='/cart'> <Badge className='badge' sx={{
                "& .MuiBadge-badge": {
                  color: "gray",
                  backgroundColor: "#d0d5db"
                },
                "& .MuiBadge-badge:hover": {
                  color: "white",
                  backgroundColor: "black"
                }
              }} badgeContent={cartBadge} showZero>
                  
                  <i class=" fs-5 fa-solid fa-cart-shopping text-white" ></i></Badge></Link>
              </div>
            </Navbar.Collapse>
          </Container>
          {isHovering && (
        <div className='justify-content-end d-flex settings mt-5 '><Settings /></div>)}
        </Navbar>

      </div>



      

    </React.Fragment>
  );
}

export default HomePage;