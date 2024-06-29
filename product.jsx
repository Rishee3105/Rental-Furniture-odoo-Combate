import React, { useState } from 'react';
import ProductTile from './productTile';
import '../style/product.css';
import sofa1 from '../images/sofa1.png';
import sofa2 from '../images/sofa2.png';
import sofa3 from '../images/sofa3.png';
import sofa4 from '../images/sofa4.png';
import sofa5 from '../images/sofa5.png';
import sofa6 from '../images/sofa6.png';
import chair1 from '../images/chair1.png';
import chair2 from '../images/chair2.png';
import chair3 from '../images/chair3.png';
import chair4 from '../images/chair4.png';
import chair5 from '../images/chair5.png';
import bed1 from '../images/bed1.png';
import bed2 from '../images/bed2.png';
import bed3 from '../images/bed3.png';
import cpb1 from '../images/cpb1.png';
import cpb2 from '../images/cpb2.png';
import cpb3 from '../images/cpb3.png';
import office1 from '../images/office1.png';
import office2 from '../images/office2.png';
import office3 from '../images/office3.png';


const productsData = [
    { id: 1, name: 'Sofa Set', category: 'Sofa', price: 20999, image: sofa1, description: 'Comfortable sofa set for your living room.' },
    { id: 2, name: 'Sofa Set', category: 'Sofa', price: 50999, image: sofa2, description: 'Comfortable sofa set for your living room.' },
    { id: 3, name: 'Sofa Set', category: 'Sofa', price: 30999, image: sofa3, description: 'Comfortable sofa set for your living room.' },
    { id: 4, name: 'Sofa Set', category: 'Sofa', price: 55599, image: sofa4, description: 'Comfortable sofa set for your living room.' },
    { id: 5, name: 'Sofa Set', category: 'Sofa', price: 10999, image: sofa5, description: 'Comfortable sofa set for your living room.' },
    { id: 6, name: 'Sofa Set', category: 'Sofa', price: 30999, image: sofa6, description: 'Comfortable sofa set for your living room.' },
    { id: 7, name: 'Bed Frame', category: 'Bed', price: 14999, image: bed1, description: 'Stylish bed frame for a good sleep.' },
    { id: 8, name: 'Bed Frame', category: 'Bed', price: 29999, image: bed2, description: 'Stylish bed frame for a good sleep.' },
    { id: 9, name: 'Bed Frame', category: 'Bed', price: 16699, image: bed3, description: 'Stylish bed frame for a good sleep.' },
    { id: 10, name: 'Chair', category: 'Chair', price: 5299, image: chair1, description: 'Modern styles premium chair for enhance your room look.' },
    { id: 11, name: 'Chair', category: 'Chair', price: 3299, image: chair2, description: 'Modern styles premium chair for enhance your room look.' },
    { id: 12, name: 'Chair', category: 'Chair', price: 9599, image: chair3, description: 'Modern styles premium chair for enhance your room look.' },
    { id: 13, name: 'Chair', category: 'Chair', price: 7599, image: chair4, description: 'Modern styles premium chair for enhance your room look.' },
    { id: 14, name: 'Chair', category: 'Chair', price: 12599, image: chair5, description: 'Modern styles premium chair for enhance your room look.' },
    { id: 15, name: 'cupboard', category: 'Cupboard', price: 17599, image :cpb1, description: 'Stylish cupboard for your lovely clothes.' },
    { id: 16, name: 'cupboard', category: 'Cupboard', price: 21599, image :cpb2, description: 'Stylish cupboard for your lovely clothes.' },
    { id: 17, name: 'cupboard', category: 'Cupboard', price: 19599, image :cpb3, description: 'Stylish cupboard for your lovely clothes.' },
    { id: 18, name: 'Office', category: 'Office', price: 35999, image:office1, description: 'Modern table with chair for your office.' },
    { id: 19, name: 'Office', category: 'Office', price: 57999, image:office2, description: 'Modern table with chair for your office.' },
    { id: 20, name: 'Office', category: 'Office', price: 45999, image:office3, description: 'Modern table with chair for your office.' },
];

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === 'All' ? productsData : productsData.filter(product => product.category === selectedCategory);

    return (
        <div className="products-page">
            <div className='head'>Explore our all range of Furniture</div>
            <div className="filters" style={{color:"black"}}>
                <button onClick={() => handleCategoryChange('All')}>All</button>
                <button onClick={() => handleCategoryChange('Sofa')}>Sofa</button>
                <button onClick={() => handleCategoryChange('Cupboard')}>Cupboard</button>
                <button onClick={() => handleCategoryChange('Office')}>Office</button>
                <button onClick={() => handleCategoryChange('Chair')}>Chair</button>
                <button onClick={() => handleCategoryChange('Bed')}>Bed</button>
                
            </div>

            <div className="products">
                {filteredProducts.map(product => (
                    <ProductTile key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
