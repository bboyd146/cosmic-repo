import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";


const NavTabs = () => {
    return (

                    <nav className="flex nav-tabs text-center hidden lg:block">
                        <div className="flex items-end">
                            <Link to="/" className="text-base font-small text-gray-900 hover:text-gray-700">Home</Link>
                            <Link to="/Inventory" className="text-base font-small text-gray-900 hover:text-gray-700">Inventory</Link>
                            <Link to="/About" className="text-base font-small text-gray-900 hover:text-gray-700">About</Link>
                            <Link to="/Cart" className="text-base font-small text-gray-900 hover:text-gray-700"><MdOutlineShoppingCart /></Link>
                        </div>
                    </nav>
    )
}

export default NavTabs;
