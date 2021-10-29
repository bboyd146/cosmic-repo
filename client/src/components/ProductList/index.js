import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';


function ProductList() {
    const [state, dispatch] = useStoreContext();


    const { currentGenres } = state;


    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (currentGenres.length === 0) {
            return state.products;
        }

        return state.products.filter(
            (product) => currentGenres.includes(product.genre._id)
        );
    }

    return (
        <div className="my-2 col-span-4 ">

            {state.products.length ? (
                <div className="">
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {filterProducts().map((product) => (
                            <ProductItem
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            description={product.description}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                            />
                            ))
                        }
                    </div>
                </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
    );
}

export default ProductList;





