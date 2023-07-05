import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { Link } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';
import FB from ".././Assets/images/FB.webp";
import insta from ".././Assets/images/Insta.webp"
import Lnkdin from ".././Assets/images/Lnkdin.webp"

const FooterNavBar = () => {
  return (
    <div className='bg-black'>
    <div >
    <div className='justify-content-center  display-flex text-center'>
      
        <img className='col-lg-1 footerLogo' src={FB} alt="Facebook" />
        <img className='col-lg-1 footerLogo' src={insta} alt="Instagram" />
        <img className='col-lg-1 footerLogo' src={Lnkdin} alt="LinkedIn" />
       
    </div>
    
          <section className="footer  " >
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
    </div></div>
  )
}

export default FooterNavBar