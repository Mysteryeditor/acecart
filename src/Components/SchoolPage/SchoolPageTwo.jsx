import React, { useState } from 'react';
import { useEffect } from 'react';
import HomePage from '../FirstSection'
import { Link, useParams } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../CssFiles/SchoolUniforms.css';
import { Badge } from 'react-bootstrap';
import { Container } from '@mui/material';
import sortBy from 'sort-by';

const SchoolUniforms = () => {
  const [type, setType] = useState('items')
  const [uniforms, setUniforms] = useState([]);
  const sorting = (e) => {
    setType(e.target.value);
    mySort(e.target.value);
  }
  const mySort = (prop) => {
    const items = [...uniforms];
    switch (prop) {
      case "LowToHigh":
        items.sort((a, b) => a.cost - b.cost);
        break;
      case "HighToLow":
        items.sort((a, b) => b.cost - a.cost);
        break;
      case "Ascending":
        items.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        break;
      case "Descending":
        items.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        break;

      default:
        break;
    }
    setUniforms(items)
  }

  const fetchData = () => {
    fetch("https://bane47.onrender.com/uniforms")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUniforms(data);
        console.log(data.length);

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

            <h4 className='text-start '>SCHOOL <Badge className='ProximaThin' bg='' text='secondary'>- {uniforms.length} items</Badge></h4>

          </div>
          <div className='col-lg-9 justify-content-end d-flex'>
            <select name="sort" id="sort" onChange={sorting} value={type} className='Proxima p-1'>
              <option value="" disabled >Sort by:</option>
              <option value="LowToHigh">Price: Low To High</option>
              <option value="HighToLow">Price: High To Low</option>
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
                    <Card className='border-0 mt-5' key={uniform.id}>
                      <Card.Img variant="top" className='UniCardImg' src={uniform.image} />
                      <Card.Body >
                        <Card.Text >
                          <label className='pt-5 Proxima text-black uniName text-decoration-none'>{uniform.title}</label>
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



