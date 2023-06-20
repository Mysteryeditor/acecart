import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import FB from "C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/FB.webp";
import insta from "C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/Insta.webp"
import Lnkdin from "C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/Lnkdin.webp"
import Carousel from 'react-bootstrap/Carousel';
import Home1 from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/Home-1.jpg.webp'
import Home2 from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/home3.jpg.webp'
import Home3 from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/home4.jpg.webp'
import 'C:/Users/cgvak/Desktop/React/acecart/src/App.css'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Card from 'react-bootstrap/Card';
import { Height, Visibility } from '@mui/icons-material';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


export default function SecondSection() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <React.Fragment >
            <div className="SecondSectionBody">            <Carousel className='HomeCarousel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home1}
          alt="First slide"
        />
        <Carousel.Caption className=' m-auto mb-lg-5 mb-sm-5 mb-md-5 '>
        <Card className='HomePageCard m-auto mb-4 '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg mt-1"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>
                        
                    </Card.Body>
                </Card>
                <span className='mt-5 acecraftLink'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
<Container fluid>
    <div className='row'>
        <div className='col-6'>
        <Carousel className='HomeCarousel ' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className='img-responsive home2'
          src={Home2}
          alt="First slide"
        />
        <Carousel.Caption className=' m-auto mb-lg-5 mb-sm-5 mb-md-5 '>
        <Card className='HomePageCard m-auto mb-4 '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg mt-1"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>
                        
                    </Card.Body>
                </Card>
                <span className='mt-5 acecraftLink'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>

        </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>

        </div>
        <div className='col-lg-6'>
        <Carousel className='HomeCarousel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="  home2"
          src={Home3}
          alt="First slide"
        />
        <Carousel.Caption className=' m-auto mb-lg-5 mb-sm-5 mb-md-5 '>
        <Card className='HomePageCard m-auto mb-4 '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg mt-1"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>
                        
                    </Card.Body>
                </Card>
                <span className='mt-5 acecraftLink'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

        </div>

    </div>
    </Container>

<div >
<div className='justify-content-center  display-flex text-center'>
  
    <img className='col-lg-1 footerLogo' src={FB} alt="Facebook" />
    <img className='col-lg-1 footerLogo' src={insta} alt="Instagram" />
    <img className='col-lg-1 footerLogo' src={Lnkdin} alt="LinkedIn" />
   
</div>
{/* 
<div className="row" style={{marginLeft:'65px'}} >

<div className="col-2 ">

    <Link to="#">ABOUT</Link>
</div>

<div className="col-2" mx-3>
    <Link to="#">CARE</Link></div>

<div className="col-2 "><Link to="#">RETURNS</Link></div>

<div className="col-2">
    <Link to="#">PRODUCTION</Link>
</div>

<div className="col-2">
    <Link to="#">TERMS</Link>
</div>

<div className="col-2 border-0 ">
    <Link to="#" >GET HELP</Link>
</div>

</div> */}
      <section className="footer " >
<Nav className='justify-content-center' activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
      <Nav.Item className='col-2 mb-4'>
        <Nav.Link href="/home" className='footerLink'>ABOUT 
        
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='col-2 mb-4'>
        <Nav.Link className='footerLink' eventKey="link-1">CARE
         </Nav.Link>
      </Nav.Item>
      <Nav.Item className='col-2 mb-4'>
        <Nav.Link className='footerLink' eventKey="link-2">RETURNS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='col-2 mb-4'>
        <Nav.Link className='footerLink' eventKey="link-3" >
          PRODUCTION 
         </Nav.Link>
      </Nav.Item >
      <Nav.Item className='col-2 mb-4'>
        <Nav.Link className='footerLink' eventKey="link-4" >
          TERMS
          </Nav.Link>
      </Nav.Item>
      <Nav.Item className='col-2 mb-4 border-0'>
        <Nav.Link className="text-white" eventKey="link-5" >
          GET HELP
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </section>
</div>

    </div>

        </React.Fragment>
    )
}
