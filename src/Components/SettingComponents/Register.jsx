import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/signIn.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
function SignUpForm() {
   const [Fname,setFname]=useState('')
    const [Lname,setLname]=useState('')
    const [email,setemail]=useState('')
    const [pwd,setpwd]=useState('')
    const [category,setcategory]=useState('')
    const [dname,setDname]=useState('')
    const [dcode,setdcode]=useState('')
    const [city,setcity]=useState('')
    const [state,setState]=useState('')
    const [gst,setGst]=useState('')


    const postData=()=>{
        axios.post("http://localhost:4000/register",{
            fname:Fname,
            lname:Lname,
            email: email,
            password:pwd,
            category:category,
            dname:dname,
            dcode:dcode,
            city:city,
            state:state,
            gst:gst
        })
        
        .then((error)=>{
            console.log(error)
        })
    }
   
   
 const { register, handleSubmit, formState: { errors }, watch } = useForm() 
    const onSubmit = (data) => {
        console.log(data)
data.preventDefault();
        setFname(data.firstName);
        setLname(data.lastName);
        setemail(data.email);
        setpwd(data.password);
        setcategory(data.category);
        setDname(data.dname);
        setdcode(data.dcode);
        setcity(data.city);
        setState(data.state);
        setGst(data.gst);
        console.log("The first name is "+Fname);
        postData();
    }
   

    return (
        <div>
            <div className='justify-content-center d-flex text-center  m-5 border-4'>
                <Card className='col-lg-4 shadow border-0'>

                    <Card.Body>
                        <Form name='signUp' onSubmit={handleSubmit(onSubmit)}>

                            <h2 className='signup'>Signup with ACECRAFT</h2>
                            <Form.Group as={Col} className='mb-3 '>
                                <Form.Control type="text" placeholder="First Name" id='Fname' {...register('firstName', { required: true, minLength: 8, maxLength: 16 })} />
                                {errors.firstName && <span className='signUpSpan' >First name is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3 '>
                                <Form.Control type="text" placeholder="Last Name" id="Lname" {...register('lastName', { required: true, maxLength: 16 })} />
                                {errors.lastName && <span className='signUpSpan'>Last name is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3 '>
                                <Form.Control type="email" placeholder="Enter email" id="email" {...register('email', { required: 'Email is required' || "Enter the email", validate: (value) => isEmail(value) || "Invalid email address" })} />
                                {errors.email && <span className='signUpSpan'>{errors.email.message}</span>}
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3 '>
                                <Form.Control type="password" placeholder="Password" id="pwd"   {...register('password', {
                                    required: "Password is required", pattern: {
                                        value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                                        message: "Password must contain atleast one uppercase ,lowercase , number and a special character"
                                    }
                                })} />
                                {errors.password && <span className='signUpSpan'>{errors.password.message}</span>}
                            </Form.Group>

                            <Form.Group as={Col} className='my-1'>
                                <Form.Control type="password" placeholder="Confirm Password" id="cpwd"   {...register('confirmPassword', { required: "Confirm Password is required", validate: (value) => value === watch('password') || "Passwords are not matching" })} />
                                {errors.confirmPassword && <span className='signUpSpan'>{errors.confirmPassword.message}</span>}
                            </Form.Group>

                            <div className='row justify-content-center my-1' {...register('category', { required: true })}>
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
                            {errors.category && <span className='signUpSpan'>Please select the category</span>}



                            <Form.Group className="mb-3"  >
                                <Form.Control placeholder="Dealership Name" id="dname" {...register('dname',{required:true})} />
                                {errors.dname && <span className='signUpSpan'>Dealership name is required</span>}
                            </Form.Group>

                            <Form.Group className="mb-3 "  >

                                <Form.Control placeholder="Dealership Number/Code" id="dcode" {...register('dcode',{required:true})}/>
                                {errors.dcode && <span className='signUpSpan'>Dealership code is required</span>}
                            </Form.Group>


                            <Form.Group as={Col} className='mb-3'>
                                <Form.Control placeholder="City" id="city" {...register('city',{required:true})}/>
                                {errors.city && <span className='signUpSpan'>City is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3'>
                                <Form.Label className='justify-content-start d-flex' column sm={2}>
                                    State
                                </Form.Label>
                                <Form.Select defaultValue="" className='my-1' id="state" {...register('state',{required:true})}>
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
                                {errors.state && <span className='signUpSpan'>State is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3'>
                                <Form.Control placeholder="GST Number" id="gstnum" {...register('gst',{required:true})}/>
                                {errors.gst && <span className='signUpSpan'>GST number is required</span>}
                            </Form.Group>




                            <Button className='logInButton bg-black' type="submit">
                                Register
                            </Button>
                            <div>
                            <span className=' already p-4'>Already have an account? <Link className='login' to="/login" >Login!</Link></span></div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default SignUpForm;


