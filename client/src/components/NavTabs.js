import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const NavTabs = () => {
    return (
        <nav className="flex nav-tabs text-center">
            <div className="flex flex-wrap">
                <Link to="/">Home</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Signup</Link>
                <Link to="/Cart"><MdOutlineShoppingCart/></Link>
            </div>
        </nav>
        
    )
}

export default NavTabs;
