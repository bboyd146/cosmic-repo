import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import ProductQuickView from "../ProductQuickView";

function ProductItem(item) {
    const [state, dispatch] = useStoreContext();
    const [productModal, setProductModal] = React.useState(false);

    const {
        image,
        title,
        _id,
        price,
        description,
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    const closeProductModal = () => setProductModal(false);


    return (
        <div className="bg-cream">
            <div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                {/* <div className="mt-6 grid grid-cols-4 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
                        <a key={_id} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8">
                                <img
                                    src={image}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                    onClick={() => setProductModal(true)}
                                />
                            </div>
                                <h3 className="mt-4 text-lg text-gray-700">{title}</h3>
                                {/* <h2 className="block mt-5 text-lg font-medium text-gray-900">{description}</h2> */}
                            <p className="mt-5 text-lg font-medium text-gray-900">${price}</p>
                        </a>
                </div>
                <ProductQuickView item={item} isOpen={productModal} closeHandler={closeProductModal} />
            </div>
        </div>
        // </div>
    );
}

export default ProductItem;
