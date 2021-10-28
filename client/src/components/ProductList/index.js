import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import GenreMenu from '../GenreMenu';


function ProductList() {
    const [state, dispatch] = useStoreContext();


    const { currentGenre } = state;


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
        if (!currentGenre) {
            return state.products;
        }

        return state.products.filter(
            (product) => product.genre._id === currentGenre
        );
    }

    return (
        <div className="my-2">

            {state.products.length ? (
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <GenreMenu />
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





