import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { TOGGLE_CART } from '../utils/actions'
import { useStoreContext } from '../utils/GlobalState'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavTabs = ({cartOpen = false}) => {
    const [state, dispatch] = useStoreContext();
    

    function toggleCart() {
        
        dispatch({ type: TOGGLE_CART });
      }
    return (

        <nav className="flex nav-tabs text-center hidden lg:block">
            <div className="flex items-end">
                <Link to="/" className="text-base font-small text-gray-900 hover:text-gray-700">Home</Link>
                <Link to="/Inventory" className="text-base font-small text-gray-900 hover:text-gray-700">Inventory</Link>
                <Link to="/About" className="text-base font-small text-gray-900 hover:text-gray-700">About</Link>
                {/* <Link to="/Login" className="text-base font-small text-gray-900 hover:text-gray-700">Login</Link>
                <Link to="/Signup" className="text-base font-small text-gray-900 hover:text-gray-700">Signup</Link> */}
                <Link to="/Inventory" className="text-base font-small text-gray-900 hover:text-gray-700" onClick={toggleCart}><MdOutlineShoppingCart /></Link>
            <Popover as="div" className="ml-3 relative">
                <div>
                    <Popover.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </Popover.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Popover.Panel className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        
                            {({ active }) => (
                                <a
                                    href="/Login"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Login
                                </a>
                            )}
                            {({ active }) => (
                                <a
                                    href="/Signup"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Signup
                                </a>
                            )}
                            </Popover.Panel>
                </Transition>
            </Popover>
            </div>
        </nav>



    )
}

export default NavTabs;
