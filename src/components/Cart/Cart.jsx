import { useState } from "react";
export default function Cart(props) {

    const {cart} = props;
    const {setCart} = props;
    const [state, setState] = useState([])
 
     
    return (
        <><div>
            <h1>CART</h1>
            {props.cart.map(crt => (
                <><div><h1>{crt.fields.title}</h1>
                    <img src={crt.fields.image} />
                    <h1>{crt.fields.text}</h1>
                    <h1>{crt.fields.price}</h1></div>
                </>
            ))}


        </div><h3>Total:{ props.cart.map(crt => (
                <><div>
                    
                    <h1>{crt.fields.price * crt.fields.price  }</h1></div>
                </>
            ))}</h3></>
           
           )}

