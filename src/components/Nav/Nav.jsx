import {Link} from 'react-router-dom'

export default function Nav(props) {

const {cart} = props;
const {setCart} = props;
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart({cart.length})</Link>
            <Link to='/new'>Sell</Link>
        </div>
    )
}
