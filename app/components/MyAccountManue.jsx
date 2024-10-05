import { Link } from 'react-router-dom';
import '../assets/css/myAccount.css';
function MyAccountManue(){
    return(                
    <div className="myAccountManue-Div">
        <ul className='myAccountManue'>
            <Link to={'/myAcount'} className='navName'><li>My Acount</li></Link>
            <Link className='navName'><li>Check out</li></Link>
            <Link className='navName'><li>Shoping cart</li></Link>
            <Link className='navName'><li>Wish list</li></Link>
            <Link className='navName'><li>log out</li></Link>           
        </ul>
    </div>)
}
export default MyAccountManue;