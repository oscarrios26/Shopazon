import { useParams } from "react-router-dom"
import './Details.css'

export default function Detail(props) {
const params = useParams()
const gameInfo = props.games.find(ga => {
    return params.id === ga.id
    
})
console.log(gameInfo)
    return (
        <div>
            
            
            
            <h3>{gameInfo.fields.title}</h3>
            <img className="gameImage" src={gameInfo.fields.image}/>
            <h3>{gameInfo.fields.text}</h3>
            <h3>{gameInfo.fields.price}</h3>
            
           
        </div>
    )
}
