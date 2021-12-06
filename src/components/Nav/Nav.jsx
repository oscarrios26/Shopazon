import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {

const {cart} = props;
const {setCart} = props;
    return (
        <div className='mainnav'>
        <>  
        <div className="homenav">
            <Link to='/'>Home</Link>
        </div>
        <div className="cartnav">
            <Link to='/cart'>Cart({cart.length})</Link>
        </div>
        <div className="sellnav">
            <Link to='/new'>Sell</Link>
        </div>
        </>
        </div>
    )
}
