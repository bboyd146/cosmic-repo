import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const stripePromise = loadStripe('pk_test_51JnmXxIaPmg7X2tXIs50xiSEsvQTO6xXK9ATsTwz5t8glA310PxQ2kHcH9OM4fYhSWfqf3FC9ggQiRROISBiNm3k0098ZOofsg');
// const Cart = () => {
//     const [state, dispatch] = useStoreContext();
//     const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//     useEffect(() => {
//         if (data) {
//             stripePromise.then((res) => {
//                 res.redirectToCheckout({ sessionId: data.checkout.session });
//             });
//         }
//     }, [data]);

//     useEffect(() => {
//         async function getCart() {
//             const cart = await idbPromise('cart', 'get');
//             dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//         }

//         if (!state.cart.length) {
//             getCart();
//         }
//     }, [state.cart.length, dispatch]);

//     function toggleCart() {
//         dispatch({ type: TOGGLE_CART });
//     }

//     function calculateTotal() {
//         let sum = 0;
//         state.cart.forEach((item) => {
//             sum += item.price * item.purchaseQuantity;
//         });
//         return sum.toFixed(2);
//     }

//     function submitCheckout() {
//         const productIds = [];

//         state.cart.forEach((item) => {
//             for (let i = 0; i < item.purchaseQuantity; i++) {
//                 productIds.push(item._id);
//             }
//         });

//         getCheckout({
//             variables: { products: productIds },
//         });
//     }

//     if (!state.cartOpen) {
//         return (
//             <div className="cart-closed" onClick={toggleCart}>
//                 <span role="img" aria-label="trash">
//                     🛒
//                 </span>
//             </div>
//         );
//     }

//     return (
//         <div className="cart">
//             <div className="close" onClick={toggleCart}>
//                 [close]
//             </div>
//             <h2>Shopping Cart</h2>
//             {state.cart.length ? (
//                 <div>
//                     {state.cart.map((item) => (
//                         <CartItem key={item._id} item={item} />
//                     ))}

//                     <div className="flex-row space-between">
//                         <strong>Total: ${calculateTotal()}</strong>

//                         {Auth.loggedIn() ? (
//                             <button onClick={submitCheckout}>Checkout</button>
//                         ) : (
//                             <span>(log in to check out)</span>
//                         )}
//                     </div>
//                 </div>
//             ) : (
//                 <h3>
//                     <span role="img" aria-label="shocked">
//                         😱
//                     </span>
//                     You haven't added anything to your cart yet!
//                 </h3>
//             )}
//         </div>
//     );
// };

// export default Cart



export default function MyCart() {
    const [open, setOpen] = useState(true)
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds },
        });
    }

    // if (!state.cartOpen) {
    //     return (
    //         <div className="cart-closed" onClick={toggleCart}>
    //             <span role="img" aria-label="trash">
    //                 🛒 Open Cart
    //             </span>
    //         </div>
    //     );
    // }


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="w-screen max-w-md">
                                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                            <div className="ml-3 h-7 flex items-center">
                                                <button
                                                    type="button"
                                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {state.cart.map((item) => (
                                                        <CartItem key={item._id} item={item} />
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Total</p>
                                            <p>${calculateTotal()}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            {Auth.loggedIn() ? (
                                                <a
                                                    href="#"
                                                    className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                    onClick={submitCheckout}
                                                >
                                                    Checkout
                                                </a>)
                                                : (
                                                    <span>(log in to check out)</span>
                                                )}
                                        </div>
                                        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                    type="button"
                                                    className="text-indigo-600 font-medium hover:text-indigo-500"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}


