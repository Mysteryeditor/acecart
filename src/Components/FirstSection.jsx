import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css'
import React from 'react'; import { useState } from 'react';
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css';
import settingImage from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/setting.png';
import Badge from '@mui/material/Badge';
import Settings from './NavList';
import { Link } from 'react-router-dom';

function HomePage() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(!isHovering);
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  }


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
              <div>      <img onClick={handleMouseOver} className='settingImage mx-3' sx={{
                "& .settingImage:hover": {

                }
              }} src={settingImage} alt="" />     <Badge className='badge' sx={{
                "& .MuiBadge-badge": {
                  color: "gray",
                  backgroundColor: "#d0d5db"
                },
                "& .MuiBadge-badge:hover": {
                  color: "white",
                  backgroundColor: "black"
                }
              }} badgeContent={0} showZero>
                  <i class="mx-1 fs-5 fa-solid fa-cart-shopping text-white"></i></Badge>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>



      {isHovering && (
        <div className='justify-content-end d-flex settings'><Settings /></div>)}

    </React.Fragment>
  );
}

export default HomePage;