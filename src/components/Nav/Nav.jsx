import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {

const {cart} = props;

    return (
    
    <>
    
        <div className='mainnav'>
        
             
    
          <p className="homep"> 
          
            <Link className="homelink" to='/'>Home</Link> 

            <Link className="cartlink"  to='/cart'>Cart({cart.length})</Link>


           <Link className="sellink"  to='/new'>Sell</Link>
           
           </p>
             
        </div>
    </>

        
    )
}
