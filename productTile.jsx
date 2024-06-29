import React, { useState } from 'react';
import '../style/productTile.css';

const ProductTile = ({ product }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setIsAddedToCart(true);
    };

    return (
        <div className="product-tile">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
                <p className="product-description">{product.description}</p>
                {!isAddedToCart ? (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                ) : (
                    <p>Added to Cart</p>
                )}
            </div>
        </div>
    );
};

export default ProductTile;
