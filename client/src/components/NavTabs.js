import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { BsVinylFill } from "react-icons/bs";
import Auth from '../utils/auth';
import { RiLogoutCircleRFill } from 'react-icons/ri'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/Inventory' },
    { name: 'Cart', href: '/Cart' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavTabs = ({ cartOpen = false }) => {
    return (
        <>
        <Popover>
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="-mr-2 flex items-center md:hidden lg:hidden">
                            <Popover.Button className="bg-cream rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                </div>

            </nav>
            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                >
                    <div className="rounded-lg shadow-md bg-cream ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-cream rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/Login"
                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                            Log in
                        </a>
                    </div>
                </Popover.Panel>
            </Transition>
            </Popover>
            <nav className="flex nav-tabs justify-center sm:hidden md:flex ">
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
                    )}
                </div>
            </nav>
        </>
    )
}

export default NavTabs;
