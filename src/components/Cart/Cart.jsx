
export default function Cart(props) {

    const {cart} = props;
    const {setCart} = props;
    console.log(cart)
    console.log(setCart)
    return (
        <div>
           {props.cart.map(crt => (
             <><h1>{crt.fields.title}</h1>
             <img src={crt.fields.image} />
             <h1>{crt.fields.text}</h1>
             <h1>{crt.fields.price}</h1></>
           
           ))}
           </div>
    
            )}


