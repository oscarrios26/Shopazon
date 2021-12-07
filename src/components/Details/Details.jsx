
import { useParams } from "react-router-dom"
import './Details.css'


export default function Detail(props) {
const {cart} = props;
const {setCart} = props;
console.log(setCart)

const params = useParams()
const gameInfo = props.games.find(ga => {
    return params.id === ga.id
})
if (!gameInfo) {
    return <h3>Loading...</h3>
}

   
const addToCart = (gameInfo) => {
    setCart([...cart, gameInfo])
    
}
   
   
   
   
   
   
   
   
   return (

<div className="infoGame" >
    <h3>{gameInfo.fields.title}</h3>
    <img id="imageGame" src={gameInfo.fields.image} />
    <h3>{gameInfo.fields.text}</h3>
    <h3>{gameInfo.fields.price}</h3>
    <button onClick={() => addToCart(gameInfo)}>Add To Cart</button>
 </div>

)
}