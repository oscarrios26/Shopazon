import { Link } from "react-router-dom"
import './Homepage.css' 






export default function Homepage(props) {
    
    if (!props.games) {
        return <h3>Loading...</h3>
    }
    return (<><div className="front">  
         <p className="websitename">Shopazon</p>
    </div><><div className="gameshomepage">
        {props.games.map(vg => (

            <Link key={vg.id}
                to={`/details/${vg.id}`} className="dispalytitle">

                <img src={vg.fields.image} className="eachgame" alt="games" />
                <h3 id="hometitlegame">{vg.fields.title}</h3>
            </Link>

        ))}
    </div><div>

        </div></></>

        )}
