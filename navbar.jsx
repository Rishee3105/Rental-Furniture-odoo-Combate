import React from 'react';
import '../style/navbar.css';
import logo from '../images/logo.png';
import ProductsPage from './product';
import Footer from './footer';
const navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{
                    background: "rgb(115,232,233)",
                    background: "linear-gradient(54deg, rgba(115,232,233,1) 0%, rgba(171,210,224,0.6783963585434174) 0%, rgba(116,184,225,1) 0%) "
                }}>
                    <img src={logo} width="40" height="40" className="d-inline-block align-center ms-3 me-3" alt="logo" />
                    <a className="navbar-brand" href="#" style={{ fontSize: '20px' }}>
                        Furnio.com
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style={{ fontSize: '20px' }}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={<ProductsPage/>}>Products</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href={Footer}>About Us</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav  ms-auto me-5" style={{ fontSize: '20px' }}>
                            <li className="nav-item">
                                <a class="nav-link" href="#" style={{ marginRight: "5px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Login
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </>
    )
}
export default navbar;
