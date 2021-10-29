import { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [products, setProducts] = useState([]);

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    useEffect(() => {
        fetch(`http://localhost:3000/products?page=${pageNumber}`)
            .then((response) => response.json())
            .then(({ totalPages, products }) => {
                setProducts(products);
                setNumberOfPages(totalPages);
            });
    }, [pageNumber]);

    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
    };

    const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
    };

    const [state, dispatch] = useStoreContext();


    // const { currentGenres } = state;


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

    // function filterProducts() {
    //     if (currentGenres.length === 0) {
    //         return state.products;
    //     }

    //     return state.products.filter(
    //         (product) => currentGenres.includes(product.genre._id)
    //     );
    // }





    return (

        <div className="flex justify-center justify-around" >
            
            {products.map ?((product) => (
                <div>
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            description={product.description}
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                </div>
            )): (
                <h3>You haven't added any products yet!</h3>
            )}
            <button onClick={gotoPrevious}>Previous</button>
            {pages.map((pageIndex) => (
                <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                    {pageIndex + 1}
                </button>
            ))}
            <h3>Page  {pageNumber + 1} of 10</h3>
            <button onClick={gotoNext}>Next</button>
        </div>
    );
            }


export default Pagination;