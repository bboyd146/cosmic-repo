// import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Inventory from './pages/Inventory';
// import Cart from './pages/Cart';

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Header() {
    return (
        <div className="relative bg-cream overflow-hidden m-20 rounded">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-cream sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-cream transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <Popover>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button className="bg-cream rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>

                            </nav>
                        </div>

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
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                                        href="#"
                                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>


                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">

                            <h1 className="text-5xl tracking-tight font-logo text-pink sm:text-5xl md:text-8xl">
                                <span className="block xl:inline ">Cosmic Records</span>{' '}
                            </h1>
                            <h2 className="text-5xl tracking-tight font-logo text-indigo-600 sm:text-5xl md:text-6xl">
                                <span className="block text-indigo-600 xl:inline">online store</span>
                            </h2>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="/Inventory"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Shop!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-57 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
                    src="https://res.cloudinary.com/cosmic-records/image/upload/v1635176551/cosmic%20records/records-1524110-1280x960_eulwfv.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}


