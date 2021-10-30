import { motion } from 'framer-motion'
import { LockClosedIcon } from '@heroicons/react/solid'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

export default function Signup() {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);
    console.log(formState)
    console.log(formState.email)
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        console.log(mutationResponse)
        const token = mutationResponse.data.addUser.token;
        console.log(token)
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
            <motion.div exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto rounded-xl"
                                src="https://res.cloudinary.com/cosmic-records/image/upload/c_scale,h_300,w_300/v1635299182/cosmic%20records/Cosmic_Records_4_v9sdkz.png"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-pink">Create an account</h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="firstName" className="sr-only">
                                        First name
                                    </label>
                                    <input
                                        type="firstName"
                                        name="firstName"
                                        id="firstName"
                                        
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="First Name"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="sr-only">
                                        Last name
                                    </label>
                                    <input
                                        type="lastName"
                                        name="lastName"
                                        id="lastName"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-white group-hover:text-indigo-400" aria-hidden="true"  />
                                    </span>
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
    )
}