import { useState } from "react";
import { Link } from "react-router-dom";

import "./Cart.css"




export default function Cart(props) {

    const {cart} = props;
    const {setCart} = props;
    const [state, setState] = useState([])
    console.log(setCart)



    return (
       
    <div className="gridCart">
        {cart.length > 0 ? <h2 className="cartTitle">Cart</h2> 
        : <h2 className="cartTitle">Your Cart is Empty </h2>}

        {cart.length > 0 ? null
        : <p id="centerbutton"><button className="buttonempty" ><Link id="buttonfont" to='/'>continue shopping</Link> </button></p>}
    <div>
        {props.cart.map(crt => (
    <div >

        <img className="cartImage" src={crt.fields.image} />

        <h1 className="cartPrice">{crt.fields.price}</h1></div>

    ))}
    </div>

    </div>

        )

        }