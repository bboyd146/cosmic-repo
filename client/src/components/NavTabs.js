import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const NavTabs = () => {
    return (
        <nav className="nav-tabs text-center">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
                <Link to="/Cart">Cart</Link>
            </div>
        </nav>
        
    )
}

export default NavTabs;
