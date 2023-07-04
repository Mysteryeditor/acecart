import React from 'react'
import { useCart } from 'react-use-cart'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'C:/Users/cgvak/Desktop/React/acecart/src/CssFiles/Cart.css'

const Cart = () => {
    const { isEmpty, updateItemQuantity, removeItem, totalItems, totalUniqueItems, cartTotal, emptyCart } = useCart()
    const [id, setId] = useState('');
    const [cartProducts, setCartProducts] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [category, setcategory] = useState('')
    const [dname, setdname] = useState('')
    const [dcode, setdcode] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [gst, setgst] = useState('')

    const remove = (e) => {
        removeItem(e)
    }



    useEffect(() => {
        const items = {
            image: cartProducts.image,
            price: cartProducts.cost,
            quantity: totalItems + 1,
            title: cartProducts.title,
            size: cartProducts.size,
            id: cartProducts.id
        }
        console.log("TI" + id)
        const fetchData = () => {
            axios.get("http://localhost:4000/register?isLogged_like=true")
                .then((response) => {
                    setFname(response.data[0].fname)
                    setLname(response.data[0].lname)
                    setemail(response.data[0].email)
                    setpassword(response.data[0].password)
                    setcategory(response.data[0].category)
                    setdcode(response.data[0].dcode)
                    setdname(response.data[0].dname)
                    setcity(response.data[0].city)
                    setstate(response.data[0].state)
                    setgst(response.data[0].gst)
                    setId(response.data[0].id)
                    setCartProducts(response.data[0].cart)
                    console.log(response.data[0])
                })
                .then(() => {
                    axios.put(`http://localhost:4000/register/${id}`, {
                        fname: Fname,
                        lname: Lname,
                        email: email,
                        password: password,
                        category: category,
                        dname: dname,
                        dcode: dcode,
                        city: city,
                        state: state,
                        gst: gst,
                        cart: items,
                        isLogged: true

                    })
                        .catch((err) => {
                            return (<h1>Please login first</h1>)
                        })
                })
                .catch(() => {
                    return (<h1>Please login first</h1>)
                })

        }

        fetchData()
    }, [])
    if (isEmpty) return <h1 className='p-5 text-center'>Your cart is empty</h1>;
    return (
        <div>
            <Container>
                <h1 className='text-center p-4 Proxima'>Your bag total is &#8377;{cartTotal}</h1>

                <hr />

                <div>
                    {cartProducts.length > 0 &&
                        <table className='mb-5'>

                            {cartProducts.map((prod) => (
                                <tr >  <div key={prod.id} className='container'>
                                    {console.log(prod.image)}

                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 col-sm-4 col-xl-4'>
                                            <img src={`${prod.image}`} alt="" />
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-4 col-xl-4'>
                                            <h4 className='ProximaBold'>{prod.title}</h4>
                                            <h6 className='ProximaBold'>Size:{prod.size}</h6>
                                        </div>
                                        <div className='col-lg-2 col-sm-2 col-md-2 '>
                                            <button className='bg-transparent border-0' onClick={(e) => updateItemQuantity(prod.id, totalItems - 1)}>-</button><label onChange={(e) => totalItems(e.target.value)} >{totalItems}</label><button className='bg-transparent border-0' onClick={(e) => updateItemQuantity(prod.id, totalItems + 1)}>+</button>
                                            {console.log("Tot it" + totalItems)}
                                        </div>
                                        <div className='col-lg-2 col-sm-2 col-md-2 '>
                                            <h4><label>&#8377;{cartTotal}</label></h4>
                                            <button className='bg-transparent border-0 text-danger Proxima' >Remove</button>
                                        </div>

                                    </div>
                                    <hr />
                                    <button className='btn btn-warning' onClick={emptyCart}>Empty cart</button>

                                </div></tr>

                            ))}
                        </table>
                    }
                    <div className='row container'>
                        <div className='mb-4 col-lg-5 container'>
                            <h5 className='Proxima container'>Enter Coupon Code here:</h5>
                            <input type="text" className='w-75 py-1 Proxima' /><button className='bg-transparent border-1 px-3 py-1 Proxima' >Apply!</button>
                        </div>
                        <div className='col-lg-4 container'><h4 className='ProximaBold clr-f8f'>SubTotal</h4>
                            <h4 className='ProximaBold'>Total</h4></div>
                        <div className='col-lg-3 text-end ProximaBold container'><h6 className='clr-f8f'>&#8377;{cartTotal}</h6>
                            <h3 className='ProximaBold '>&#8377;{cartTotal}</h3></div>

                    </div>
                    <div className='text-end mb-5 container'>
                        <Link to='/' className='contShopLink text-black'> <span className='contShop p-2 Proxima'>Continue Shopping</span></Link>  <Link to='/placeorder' className='contShopLink text-black'><span className='contShop p-2 Proxima'>Place Order</span></Link>
                    </div>

                </div>





            </Container>
        </div>
    )
}

export default Cart