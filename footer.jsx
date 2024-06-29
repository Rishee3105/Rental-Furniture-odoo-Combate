
import React from 'react';
import '../style/footer.css';
import ProductsPage from './product';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p>Odoo Combate, <br />Serving You decoration to live in your dream house...</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href={ProductsPage}>Products</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>Email: info@example.com<br />Phone: +1 123 456 7890</p>
                        <p>Address: 123 Street, Gujarat , India</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
