
import { useParams } from "react-router-dom"
import './Details.css'
import { useState } from "react"



export default function Detail(props) {

    
        
    
    const [cart, setCart] = useState([])
    
    




const params = useParams()
const gameInfo = props.games.find(ga => {
    return params.id === ga.id
    
})
console.log(gameInfo)

const addToCart = (products) => {
    console.log('we are in cart')
    setCart([...cart, gameInfo])
  };

    return (

        <><div>
            
        </div><><div>



            <h3>{gameInfo.fields.title}</h3>
            <img className="gameImage" src={gameInfo.fields.image} />
            <h3>{gameInfo.fields.text}</h3>
            <h3>{gameInfo.fields.price}</h3>
            <button onClick={() => addToCart(gameInfo.fields.image)}>Add To Cart</button>


        </div></></>
    )
}