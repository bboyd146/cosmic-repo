import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const NavTabs = () => {
    return (
        <nav className="flex nav-tabs text-center">
            <div className="links flex-initial">
                <Link to="/">Home</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
                <Link to="/Cart"><MdOutlineShoppingCart/></Link>
            </div>
        </nav>
        
    )
}

export default NavTabs;
