import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'





const CartItem = ({ item }) => {
    const [open, setOpen] = useState(true)

    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });

    };

    const onChange = (e) => {
        const value = e.target.value;


        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id
            });
            idbPromise('cart', 'delete', { ...item });

        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

        }
    }
                                console.log(item)
    if(item && item.image){

    
    return (
        
        <Transition.Root show={open} as={Fragment}>
            <div>
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.price}
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="ml-4 flex-1 flex flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <p>{item.title}</p>
                            </h3>
                            <p className="ml-4">{item.price}</p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex">
                            <button type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => removeFromCart(item)}>
                                Remove
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition.Root>)
        } else {
        return null
        }
        
}

export default CartItem;