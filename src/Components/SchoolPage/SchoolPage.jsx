import React, { useState } from 'react';
import { useEffect } from 'react';
import HomePage from '../FirstSection'
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import allUniforms from 'C:/Users/cgvak/Desktop/React/acecart/src/Components/Json/SchoolProducts.json';
import Card from 'react-bootstrap/Card';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/SchoolPage.css'
// import { Container } from 'react-bootstrap';
import { Container } from '@mui/material';

const SchoolPage = () => {

  const [uniforms, setUniforms] = useState([]);

   const fetchData = () => {
    fetch("http://localhost:4000/uniforms")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUniforms(data);
        console.log(data);
      })
  }
  useEffect(() => {
    fetchData();

  }, [])


  return (
    <div>

      <div>
        <Container fluid>
          <Card>
            <Card.Body>
              <ul className='SchoolUniformLinks justify-content-center '>
                <li className='ms-5 mx-3'>PRICE</li>
                <li className='ms-5 mx-3'>GENDER</li>
                <li className='ms-5 mx-3'>GRADE</li>
                <li className='ms-5 mx-3'>BRAND</li>
              </ul>
            </Card.Body>
          </Card>


          {uniforms.length > 0 && (
            <div className='row'>
              {uniforms.map((uniform) => (
                <Link to={`/school/${uniform.id}`} key={uniform.id} className='col-lg-4'>
                  <Card key={uniform.id} >
                    <Card.Img variant="top" className='UniformCards' src={uniform.image} />
                    <Card.Body>
                      <Card.Text>
                        {uniform.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              ))}
            </div>
          )}

        </Container>
      </div>


    </div>
  )
}

export default SchoolPage;