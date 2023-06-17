import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import Home1 from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/Home-1.jpg.webp'
import Home2 from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/home3.jpg.webp'
import Home3 from 'C:/Users/cgvak/Desktop/React/acecart/src/Assets/images/home4.jpg.webp'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Card from 'react-bootstrap/Card';
import { Height } from '@mui/icons-material';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function SecondSection() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div className='position-relative'>
            <img className='col-lg-12 col-md-12 col-sm-12' src={Home1} alt="" />

            <div>
                <Card className='HomePageCard  position-absolute  top-10 start-50 translate-middle'>
                    <Card.Body>
                        <Card.Title className="cardTitleImg"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>


                    </Card.Body>
                </Card>
                <span className='position-absolute top-10 start-50 translate-middle ACECRAFTLINK'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>
                {/* <Link to="#">ACECRAFT FOR COLLEGES</Link> */}
            </div>
            <Container fluid>
            <div className='row'>
        <div className='position-relative col-lg-6 col-md-6 col-sm-6'>
            <img className='col-lg-12 col-md-12 col-sm-12 homeimg2' src={Home2} alt="" />

            <div>
                <Card className='HomePageCard position-absolute top-50 start-50 translate-middle '>
                    <Card.Body>
                        <Card.Title className="cardTitleImg"><span className='overTheCommon2'>Choose Class</span>
                            <span className='overTheCommon '> over the common.</span>
                        </Card.Title>


                    </Card.Body>
                </Card>
                <span className='position-absolute top-10 start-50 translate-middle ACECRAFTLINK'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>
                {/* <Link to="#">ACECRAFT FOR COLLEGES</Link> */}
            </div>
        </div>
        <div className='position-relative col-lg-6 col-md-6 col-sm-6'>
        <img className='col-lg-12 col-md-12 col-sm-12 homeimg3' src={Home3} alt="" />

        <div>
            <Card className='HomePageCard position-absolute top-50 start-50 translate-middle '>
                <Card.Body>
                    <Card.Title className="cardTitleImg"><span className='overTheCommon2'>Choose Class</span>
                        <span className='overTheCommon '> over the common.</span>
                    </Card.Title>


                </Card.Body>
            </Card>
            <span className='position-absolute top-10 start-50 translate-middle ACECRAFTLINK'>ACECRAFT FOR COLLEGES <i class="fa-solid fa-chevron-right"></i></span>
            {/* <Link to="#">ACECRAFT FOR COLLEGES</Link> */}
        </div>
    </div>
    </div>
    </Container>
        </div>
    )
}
