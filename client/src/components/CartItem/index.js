import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

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

    return (
        <div>
            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                    src={product.image}
                    alt={product.price}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div className="ml-4 flex-1 flex flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <p>{product.title}</p>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                    </div>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                        className="text-gray-500"
                    />
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
    );
}

export default CartItem;