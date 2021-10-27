import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { BsVinylFill } from "react-icons/bs";

const NavTabs = () => {
    return (
        <nav className="flex nav-tabs justify-center">
            <div className="flex flex-wrap">
                <Link to="/"><FaHome size={56}/></Link>
                <Link to="/Inventory"><BsVinylFill size={56}/></Link>
                <Link to="/Login"><FaUserAstronaut size={56}/></Link>
                <Link to="/Cart"><MdOutlineShoppingCart size={56}/></Link>
            </div>
        </nav>
        
    )
}

export default NavTabs;
