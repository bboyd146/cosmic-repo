import React from 'react';
import { Popover } from '@headlessui/react'


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
                        </div>
                    </Popover>


                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-left lg:text-left">

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
                    src="https://res.cloudinary.com/cosmic-records/image/upload/v1635176551/cosmic%20records/records-1524110-1280x960_eulwfv.jpg" className="rounded-2xl"
                    alt=""
                />
            </div>
        </div>
    )
}


