import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {

            setTimeout(() => {
                window.location.assign('/');
            }, 3000);
        });

    return (
        <div>
            <div className="mt-16 mx-auto w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-indigo-700 font-bold leading-tight">Success!</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-indigo-700 font-bold leading-tight">Thank you for your purchase!</h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-indigo-700 font-bold leading-tight">You will now be redirected to the home page</h2>
            </div>
        </div>
    );
}

export default Success;
