import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {

const {cart} = props;
const {setCart} = props;
    return (
        <div className='mainnav'>
          <h3 className="shopazon">shopazon</h3>
        <div className="homenav">
            <Link className="linkhome" to='/'>Home</Link>
        </div>
        <div className="cartnav">
            <Link className="linkcart" to='/cart'>Cart({cart.length})</Link>
        </div>
        <div className="sellnav">
            <Link className="linksell" to='/new'>Sell</Link>
        </div>
        
        </div>
    )
}
