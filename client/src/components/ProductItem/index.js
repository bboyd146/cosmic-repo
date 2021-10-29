import React from "react";
import ProductQuickView from "../ProductQuickView";

function ProductItem(item) {
    const [productModal, setProductModal] = React.useState(false);

    const {
        image,
        title,
        _id,
        price,
    } = item;



    const closeProductModal = () => setProductModal(false);


    return (
        <div className="bg-cream">
            <div className="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <a key={_id} className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8">
                        <img
                            src={image}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                            onClick={() => setProductModal(true)}
                        />
                    </div>
                    <h3 className="mt-4 text-lg text-gray-700">{title}</h3>
                    <p className="mt-5 text-lg font-medium text-gray-900">${price}</p>
                </a>
                <ProductQuickView item={item} isOpen={productModal} closeHandler={closeProductModal} />
            </div>
        </div>
    );
}

export default ProductItem;
