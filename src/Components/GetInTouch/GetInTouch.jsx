import React from 'react'

const GetInTouch = (props) => {
    
  return (
    <div className='getIntTouchMainDiv'>
        <div className={`col-lg-${props.colSize} mx-auto  rounded-3 ${props.bgColor}`}>


<div className={`row getInTouchrow`} style={{height:"154px",width:"240px"}}>
  <div className='col-lg-12 d-flex justify-content-center align-items-center'>
  <div className='text-center  d-block'>
            <h3 className='Duni'>Designer Uniforms</h3>
            <div className='d-flex justify-content-center'>
            <h5 className='getInTouchSpans  '>______</h5><h2 id='by' className='mx-2'> by </h2>  <h5 className='getInTouchSpans '>______</h5>
            </div>
            <h3 className='ace '>acecraft</h3>
           <button className='GIT text-white p-1 px-2  bg-transparent '>Get In Touch</button>

            </div> 
  </div>

</div>

</div>
    </div>
  )
}

export default GetInTouch