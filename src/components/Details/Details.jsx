
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

<div >
     <h3 className="infoTitle">{gameInfo.fields.title}</h3> 
    <img className="infoImage" src={gameInfo.fields.image} />
    <h3 className="infoText">{gameInfo.fields.text}</h3>
    <div className="infoPrice">
    <h3 >{gameInfo.fields.price}</h3>
    <button className="buttoncart" onClick={() => addToCart(gameInfo)}>Add To Cart</button>
    </div>
 </div>

)
}
