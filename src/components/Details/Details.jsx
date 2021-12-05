
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
console.log(gameInfo)

const addToCart = (products) => {
   
    setCart([...cart, gameInfo.fields.text])
  };
    return (

        <><div>

        </div><><div>

            <Cart cart={cart}/>

            <h3>{gameInfo.fields.title}</h3>
            <img className="gameImage" src={gameInfo.fields.image} />
            <h3>{gameInfo.fields.text}</h3>
            <h3>{gameInfo.fields.price}</h3>
            <button onClick={() => addToCart()}>Add To Cart</button>


        </div></><div>

            </div></>
    )
}