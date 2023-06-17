import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css'
import React from 'react';

function HomePage() {
  return (
    <React.Fragment >
        <div className="Navbar">
                <Navbar.Brand className="acecraftTitle" href="#">acecraft</Navbar.Brand>

    <Navbar expand="lg" className='NavbarLinks'  >
      <Container fluid >
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='navLink'>SCHOOL</Nav.Link>
            <Nav.Link href="#action2" className='navLink'>COLLEGE</Nav.Link>
            <Nav.Link href="#action1" className='navLink'>ENTERPRISE</Nav.Link>
            <Nav.Link href="#action1" className='navLink'>NOTES</Nav.Link>
            <Nav.Link href="#action1" className='navLink'>AIREN MASK</Nav.Link>
            
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </React.Fragment>
  );
}

export default HomePage;