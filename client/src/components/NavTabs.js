import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { BsVinylFill } from "react-icons/bs";
import Auth from '../utils/auth';
import { RiLogoutCircleRFill } from 'react-icons/ri'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavTabs = ({ cartOpen = false }) => {
    // const [state, dispatch] = useStoreContext();


    //     function toggleCart() {

    //         dispatch({ type: TOGGLE_CART });
    //       }
    // function showNavigation() {
    //     {
    //         Auth.loggedIn() ? (
    //             <div className="flex flex-wrap">
    //                 <Link to="/"><FaHome size={56} /></Link>
    //                 <Link to="/Inventory"><BsVinylFill size={56} /></Link>
    //                 <Link to="/Login"><FaUserAstronaut size={56} /></Link>
    //                 <Link to="/Cart"><MdOutlineShoppingCart size={56} /></Link>
    //                 {/* this is not using the Link component to logout or user and then refresh the application to the start */}
    //                 <Link to="/" onClick={() => Auth.logout()}>
    //                     <RiLogoutCircleRFill size={56} />
    //                 </Link>
    //             </div>
    //         )
    //             : (
    //                 <div className="flex flex-wrap">
    //                     <Link to="/"><FaHome size={56} /></Link>
    //                     <Link to="/Inventory"><BsVinylFill size={56} /></Link>
    //                     <Link to="/Login"><FaUserAstronaut size={56} /></Link>
    //                     <Link to="/Cart"><MdOutlineShoppingCart size={56} /></Link>
    //                 </div>
    //             );
    //     }
    // }


    return (
        <nav className="flex nav-tabs justify-center">
            <div className="flex flex-wrap">
                <Link to="/"><FaHome size={56} /></Link>
                <Link to="/Inventory"><BsVinylFill size={56} /></Link>
                <Link to="/Login"><FaUserAstronaut size={56} /></Link>
                <Link to="/Cart"><MdOutlineShoppingCart size={56} /></Link>
                {Auth.loggedIn() ? (
                    <Link to="/" onClick={() => Auth.logout()}>
                        <RiLogoutCircleRFill size={56} />
                    </Link>) : (
                    <div>
                    </div>
                )};
            </div>
        </nav>
    )
}

export default NavTabs;
