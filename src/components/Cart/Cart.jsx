import { useState } from "react";

import "./Cart.css"




export default function Cart(props) {

    const {cart} = props;
    const {setCart} = props;
    const [state, setState] = useState([])
 
     
    return (
       
        <div className="gridCart">
            
            <h2 className="cartTitle">Cart</h2>
            <div>
            {props.cart.map(crt => (
                <div >
                    
                    <img className="cartImage" src={crt.fields.image} />

                    <h1 className="cartprice">{crt.fields.price}</h1></div>

            ))}
            </div>
            
        </div>
           
           )}

