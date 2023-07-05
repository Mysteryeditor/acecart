import React from 'react'


const GetInTouch = (props) => {
    
  return (
    <div className='getIntTouchMainDiv' >
        <div className={`col-lg-${props.colSize} mx-auto  rounded-3 ${props.bgColor}`} style={props.schoolStyle}> 


<div className={`row getInTouchrow ${props.className} `} style={props.enterpriseStyle}>
  <div className='col-lg-12 d-flex justify-content-center align-items-center'>
  <div className='text-center  d-block'>
            <h3 className='Duni' style={props.acecraft}>Designer Uniforms</h3>
            <div className='d-flex justify-content-center'>
            <h5 className='getInTouchSpans  '>______</h5><h2 id='by' className='mx-2'> by </h2>  <h5 className='getInTouchSpans '>______</h5>
            </div>
            <h3 className='ace' style={props.acecraft}>acecraft</h3>
            <h4 className={`w-100 ProximaThin ${props.class}`}>{props.title}</h4>
            <h4 className={`w-100 ProximaThin ${props.class}`}>{props.subTitle}</h4>
        <button data-bs-toggle="modal" data-bs-target=".example3Modal" data-bs-whatever="@mdo" className='GIT text-white p-1 px-2  bg-transparent '>Get In Touch</button>

            </div> 
  </div>

</div>

</div>

<div className="modal fade example3Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content" style={{ width: '550px', height: '560px' }}>
                <button type="button" className="btn-close ms-auto p-3" data-bs-dismiss="modal" aria-label="Close" ></button>
                <h5 className="modal-title exampleModalLabel text-center mt-5" style={{ fontSize: '30px', fontWeight: '640' }}>Get your Uniforms designed and<br /> styled by Us!</h5>
                <div className="container-fluid icons">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="First Name" style={{ fontWeight: '650' }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group">

                                    <input type="text" className="form-control" placeholder="Last Name" style={{ fontWeight: '650' }} />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Professional Email" style={{ fontWeight: '650' }} />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="input-group">

                                <input type="text" className="form-control" placeholder="Organisation" style={{ fontWeight: '650' }} />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="input-group">

                                <input type="text" className="form-control" placeholder="Phone No." style={{ fontWeight: '650' }} />
                            </div>
                        </div>
                        <p className="quan mt-3" style={{ color: 'grey', fontWeight: '650' }}>Quantity required</p>
                        <div className="choice" style={{ color: 'grey', fontWeight: '600' }}>
                            <input type="radio" className="quantity1" name="age" value="50" />
                            <label htmlFor="age1" className="ps-1 ">10 - 50 Sets</label>
                            <input type="radio" className="quantity2 ms-5 " name="age" value="100" />
                            <label htmlFor="age2" className="ps-1">51 - 100 Sets</label>
                            <input type="radio" className="quantity3 ms-5" name="age" value="100+" />
                            <label htmlFor="age3" className="ps-1">100+ Sets</label>
                        </div>
                        <button type="button" className="btn2 btn btn-secondary mt-3" data-bs-dismiss="modal" style={{ width: '100%', color: 'white', backgroundColor: 'grey', borderRadius: '30px' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default GetInTouch