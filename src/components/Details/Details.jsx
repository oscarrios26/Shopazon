
import { useParams } from "react-router-dom"
import './Details.css'
import { useState } from "react"
import Nav from "../Nav/Nav"
import Cart from '../Cart/Cart'



export default function Detail(props) {

const [cart, setCart] = useState([])
    
const params = useParams()
const gameInfo = props.games.find(ga => {
    return params.id === ga.id
})
if (!gameInfo) {
    return <h3>Loading...</h3>
}




const addToCart = (gameInfo) => {
setCart([...cart, gameInfo])
console.log('we are in cart')
};





    return (
<><div>
</div><><div>

    

    <h3>{gameInfo.fields.title}</h3>
    <img className="gameImage" src={gameInfo.fields.image} />
    <h3>{gameInfo.fields.text}</h3>
    <h3>{gameInfo.fields.price}</h3>
    <button onClick={() => addToCart(gameInfo)}>Add To Cart</button>
 </div></><div>

</div></>)
}