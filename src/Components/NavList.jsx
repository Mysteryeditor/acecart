import React from 'react';
import handleMouseOver from './FirstSection';
import handleMouseOut from './FifthSection';
import { useState } from 'react';
import isHovering from './FirstSection';
import { Link } from 'react-router-dom';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/NavList.css'
const ThirdSection = () => {
  return (
    <div className='HomeForm' >
      <ul className='HomeUlsMain' >

        <li>
          <Link to='/signIn'><label className='HomeUls' >Sign In | <i class="fa-solid fa-right-to-bracket"></i></label></Link>
        </li>
        <li>
          <Link to='/register'><label className='HomeUls' >Register |<i class="fa-solid fa-user-plus"></i></label></Link>
        </li>
        <li>
          <Link to='/orderStatus'><label className='HomeUls' >Order Status | <i class="fa-solid fa-box-archive"></i></label></Link>
        </li>
        <li>
          <Link to='/contact'><label className='HomeUls' >Contact | <i class="fa-solid fa-comments"></i></label> </Link>
        </li>

      </ul>
    </div>
  )
}

export default ThirdSection