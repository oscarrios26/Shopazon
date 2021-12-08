
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

<div className="rela" >
    <div id="gamedetais">
     <h3 >{gameInfo.fields.title}</h3> 
     <img id="imagesize"  src={gameInfo.fields.image} />
     </div>
    <h3 className="infoText">{gameInfo.fields.text}</h3>
    <div className="infoPrice">
    <h3 >{gameInfo.fields.price}</h3>
    <button className="buttoncart" onClick={() => addToCart(gameInfo)}>Add To Cart</button>
    </div>
 </div>

)
}
