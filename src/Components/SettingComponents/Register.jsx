import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
// import validator from 'validator';
import { useForm } from 'react-hook-form';

function SignUpForm() {
    const {register,handleSubmit,formState:{errors}}=useForm();
const onSubmit = (data)=>{
    console.log(data)
}
    
    return (
        <div>
            <div className='justify-content-center d-flex text-center vh-100 m-5 border-4'>
                <Card className='col-lg-4 shadow border-0'>

                    <Card.Body>
                        <Form name='signUp' onSubmit={handleSubmit(onSubmit)}>

                            <h2 className='signup'>Signup with ACECRAFT</h2>
                            <Form.Group as={Col} controlId="formGridName" className='my-1 '>
                                <Form.Control type="text" placeholder="First Name" id='Fname' {...register('firstName',{required:true,minLength:8,maxLength:16})}  />
                                {errors.firstName && <span>First name is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName" className='my-1'>
                                <Form.Control type="text" placeholder="Last Name" id="Lname" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail" className='my-1'>
                                <Form.Control type="email" placeholder="Enter email" id="email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" className='my-1'>
                                <Form.Control type="password" placeholder="Password" id="pwd" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCPassword" className='my-1'>
                                <Form.Control type="password" placeholder="Confirm Password" id="cpwd" />
                            </Form.Group>

                            <div className='row justify-content-center my-1'>
                                <div className='col-lg-4'>
                                    <Form.Check
                                        type="radio"
                                        label="School"
                                        name="category"
                                        id="formHorizontalRadios1"
                                        value="School"
                                    />
                                </div>
                                <div className='col-lg-4'>
                                    <Form.Check
                                        type="radio"
                                        label="Enterprise"
                                        name="category"
                                        id="formHorizontalRadios2"
                                        value="Enterprise"
                                    />
                                </div>

                            </div>



                            <Form.Group className="mb-3" controlId="formGridDname my-1" >
                                <Form.Control placeholder="Dealership Name" id="dname" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridDcode my-1" >

                                <Form.Control placeholder="Dealership Number/Code" id="dcode" />
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridCity" className='my-1'>
                                <Form.Control placeholder="City" id="city" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState" className='my-1'>
                                <Form.Label className='justify-content-start d-flex' column sm={2}>
                                    State
                                </Form.Label>
                                <Form.Select defaultValue="" className='my-1' id="state">
                                    <option value=""></option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Puducherry">Puducherry</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGstnum" className='my-1'>
                                <Form.Control placeholder="GST Number" id="gstnum" />
                            </Form.Group>




                            <Button className='logInButton bg-black' type="submit">
                                Register
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default SignUpForm;




// import React from 'react'
// import { Card } from 'react-bootstrap';


// const Register = () => {
//   return (
//     <div>
//          <div className='justify-content-center d-flex text-center vh-100 m-5 border-4'>
//                 <Card className='col-lg-4 shadow border-0'>

//                     <Card.Body>
//                         <h1 className='login'>Login with ACECRAFT</h1>
//                         <div>
//                         <input className='my-2' id='uname' type="text" placeholder='Username' />
//                         </div>
//                         <div>
//                         <input className='my-2' id='lname' type="text" placeholder='Username' />
//                         </div> <div>
//                         <input className='my-2' id='email' type="text" placeholder='Username' />
//                         </div> <div>
//                         <input className='my-2' id='pwd' type="text" placeholder='Username' />
//                         </div> <div>
//                         <input className='my-2' id='cpwd' type="text" placeholder='Username' />
//                         </div>
//                         <div>
//                             <input type="radio" /> <input type="radio" />
//                         </div>
//                         <div>
//                         <input className='my-2' id='dname' type="text" placeholder='Username' />
//                         </div> <div>
//                         <input className='my-2' id='dcode' type="text" placeholder='Username' />
//                         </div> <div>
//                         <input className='my-2' id='city' type="text" placeholder='Username' />
//                         </div> <div>
//                         <input className='my-2' id='state' type="" placeholder='Username' />
//                         </div>
//                         <div>
//                         <input type="password" id='gstnum' placeholder='GST Number' />
//                         </div>

//                     <button className='logInButton bg-black mt-3'>Login</button>

//                     </Card.Body>
//                 </Card>
//             </div>
//     </div>
//   )
// }

// export default Register