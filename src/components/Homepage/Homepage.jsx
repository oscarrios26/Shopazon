import { Link } from "react-router-dom"




export default function Homepage(props) {
    
    if (!props.games) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
        {props.games.map(vg => (
        
        <Link key={vg.id} to={`/details/${vg.id}`}>{vg.fields.title}<img style={{width: "300px"  }} src={vg.fields.image}/></Link>
        
        ))}
       </div>

        )}
