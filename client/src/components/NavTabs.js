import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { BsVinylFill } from "react-icons/bs";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavTabs = ({cartOpen = false}) => {
    const [state, dispatch] = useStoreContext();
    

    function toggleCart() {
        
        dispatch({ type: TOGGLE_CART });
      }
    return (
        <nav className="flex nav-tabs justify-center">
            <div className="flex flex-wrap">
                <Link to="/"><FaHome size={70}/></Link>
                <Link to="/Inventory"><BsVinylFill size={70}/></Link>
                <Link to="/Login"><FaUserAstronaut size={70}/></Link>
                <Link to="/Cart"><MdOutlineShoppingCart size={70}/></Link>
            </div>
        </nav>



    )
}

export default NavTabs;
