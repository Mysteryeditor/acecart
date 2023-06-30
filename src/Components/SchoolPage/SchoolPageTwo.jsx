import React, { useState } from 'react';
import { useEffect } from 'react';
import HomePage from '../FirstSection'
import { Link, useParams } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/SchoolUniforms.css';
import { Badge } from 'react-bootstrap';
import { Container } from '@mui/material';

const SchoolUniforms = () => {

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
    <div className='pb-5'>
      <div className='bannerSUniform'>

<div className='text-center'>
  <h1 className='ProximaThin clr-glite dcodeSUni'>Decode</h1>
  <h1 className='Proxima clr-glite dcodeSUni'>your kind of designer uniforms.</h1>
</div>

      </div>
<div className='container'>
  <div className='row mt-5'>
    <div className='col-lg-3'>

  <h4 className='text-start '>SCHOOL <Badge className='ProximaThin' bg='' text='secondary'>- 44 items</Badge></h4>

  </div>
  <div className='col-lg-9 justify-content-end d-flex'>
  <select name="sort" id="sort" className='Proxima p-1'>
    <option value="" disabled>Sort by:</option>
    <option value="Low To High">Price: Low To High</option>
    <option value="High To Low">Price: High To Low</option>
    <option value="Ascending">Name: Ascending order</option>
    <option value="Descending">Name: Descending order</option>
  </select>
  </div>
  </div>
</div>
      <div className='mt-5'>
        <Container fluid>
          
          {uniforms.length > 0 && (
            <div className='row text-center'>
              {uniforms.map((uniform) => (
                <div className='col-lg-4 justify-content-center d-flex'>
                  <Link to={`/schooluniformproduct/${uniform.id}`} key={uniform.id}>
                  <Card className='border-0 mt-5' key={uniform.id} >
                    <Card.Img variant="top" className='UniCardImg' src={uniform.image} />
                    <Card.Body >
                      <Card.Text >
                        <label className='pt-5 Proxima text-black uniName text-decoration-none'>{uniform.name}</label>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
                </div>
              ))}
            </div>
          )}

        </Container>
      </div>


    </div>
  )
}

export default SchoolUniforms;



