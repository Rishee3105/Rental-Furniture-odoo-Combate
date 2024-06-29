import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import Home from '../images/home.jpg';
import ProductsPage from './product';



const HomePage = () => {

    const initialCategories = [
        {
            title: 'Living Room',
            images: [
                'https://images-cdn.ubuy.co.in/63e66f077aff862d1d2b6fda-3-piece-living-room-furniture-sets.jpg',
                'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg',
                'https://m.media-amazon.com/images/I/71wX5uzYpNL._AC_UF894,1000_QL80_.jpg',
                'https://cdn.mos.cms.futurecdn.net/qgCzKgahjwUQpzqosMETrF.jpg'
            ]
        },
        {
            title: 'Bedroom',
            images: [
                'https://www.mobelhomestore.com/cdn/shop/files/helbrp.jpg?v=1703153580',
                'https://www.mobelhomestore.com/cdn/shop/collections/bedroomset_1200x1200.png?v=1670843893',
                'https://5.imimg.com/data5/SELLER/Default/2021/9/HH/CG/LK/28538167/wood-bedroom-furniture.jpeg',
                'https://cdn.shopify.com/s/files/1/0099/2867/1291/products/322lyf_540x.jpg?v=1657538318'
            ]
        },
        {
            title: 'Office',
            images: [
                'https://www.idus.in/blog/wp-content/uploads/2019/01/Saint.jpg',
                'https://www.woodenstreet.com/images/office-furniture/executive-table.jpg',
                'https://www.woodenstreet.com/images/office-furniture/workstation.jpg',
                'https://lh6.googleusercontent.com/proxy/EXJ2kFL51QYA7GSxqGYDWK2EfJTjuvwosjDj5_XRSfOixE3rAzLGXs3Zwj7-pPF-6udgeOMHcbbXPk3FkrGdJjA6Fb0voWYIB-I6FtlTCUPELSuUTDMGBKoLlGCGAna_qGsA-mRpi6k'
            ]
        },
        {
            title: 'Outdoor',
            images: [
                'https://images.woodenstreet.de/image/cache/data%2Foutdoor-set%2Fmilano%2Fset-of-4%2Fnew-logo%2F1-750x650.jpg',
                'https://images-cdn.ubuy.co.in/633b5ebf37dd90785a1a1910-u-max-7-pieces-outdoor-patio-furniture.jpg',
                'https://assets.wfcdn.com/im/23347104/resize-h500-w750%5Ecompr-r85/1512/151209211/default_name.jpg',
                'https://5.imimg.com/data5/SELLER/Default/2024/5/416829213/UK/LH/PV/31448642/outdoor-furniture-for-cafe-wood.jpeg'
            ]
        }
    ];

    const [categories, setCategories] = useState(initialCategories);
    const [activeImages, setActiveImages] = useState([...initialCategories.map(category => category.images[0])]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImages(prevImages => {
                const nextImages = prevImages.map((image, index) => {
                    const currentIndex = categories[index].images.indexOf(image);
                    const nextIndex = (currentIndex + 1) % categories[index].images.length;
                    return categories[index].images[nextIndex];
                });
                return nextImages;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [categories]);

    return (
        <>
            <div className="container-fluid" style={{ background: "rgb(17,244,234)", background: "linear-gradient(180deg, rgba(17,244,234,1) 0%, rgba(171,210,224,0.8464635854341737) 38%, rgba(116,184,225,1) 100%)" }}>
                {/* Hero Section */}
                <div className="row hero-section align-items-center" >
                    <div className="col-md-6 quote">
                        <h1>Discover the Comfort of Home</h1>
                        <h4>Rent furniture for every room and every style.</h4>
                    </div>
                    <div className="col-md-6">
                        <img src={Home}  alt="Furniture" className="img-fluid hero-image" style={{ marginTop:"2rem", borderRadius:"21px", boxShadow:"5px -5px 10px #00000,-5px 5px 10px #ffff" }} />
                    </div>
                </div>

                {/* Explore Categories Button */}
                <div className="row text-center mt-4">
                    <div className="col">
                        <button className="btn btn-primary" onClick={ProductsPage}>Explore Categories</button>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="row categories mt-4">
                    {categories.map((category, index) => (
                        <div key={index} className="col-md-3">
                            <div className="category-tile">
                                <img src={activeImages[index]} alt={category.title} className="img-fluid" />
                                <h5 className="mt-2">{category.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
