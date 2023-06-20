import React from 'react';
import handleMouseOver from './FirstSection';
import handleMouseOut from './FifthSection';
import { useState } from 'react';
import isHovering from './FirstSection'
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/NavList.css'
const ThirdSection = () => {
  return (
    <div className='HomeForm' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ul className='HomeUlsMain' >

        <li>
          <a href="#"><label className='HomeUls' >Sign In | <i class="fa-solid fa-right-to-bracket"></i></label></a>
        </li>
        <li>
          <a href="#"><label className='HomeUls' >Register |<i class="fa-solid fa-user-plus"></i></label></a>
        </li>
        <li>
          <a href="#"><label className='HomeUls' >Order Status | <i class="fa-solid fa-box-archive"></i></label></a>
        </li>
        <li>
          <a href="#"><label className='HomeUls' >Contact | <i class="fa-solid fa-comments"></i></label> </a>
        </li>

      </ul>
    </div>
  )
}

export default ThirdSection