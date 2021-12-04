import { Link } from "react-router-dom"



export default function Homepage(props) {
    return (
        <div>
            {props.games.map(vg => (
        
        <Link to={`/details/${vg.id}`}>{vg.fields.title}<img style={{width: "300px"  }} src={vg.fields.image}/></Link>
        
      ))}
        </div>
    )
}
