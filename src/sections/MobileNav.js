import React from 'react'
import './MobileNav.css';
function MobileNav() {

    return (
        <div className="nav-background">
            <div className="mobile-logo">
                <img src="./icons/logo.svg" alt="" />
            </div>
            <div className="mobile-nav">
                <div className="cart">
                    <div className="flex items-center">
                        <img src="./icons/cart-dark.svg" alt="" />
                        <a href="#">0 Items - ($0.00)</a>
                    </div>
                </div>
                <div className="nav-top">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">Log in</a>
                        </li>
                        <li>
                            <a href="#">Register</a>
                        </li>
                    </ul>
                </div>
                <div className="contact flex items-center">
                    <img src="./icons/phone.svg" alt="" />
                    <div>
                        <h5>Call us: (+84) 123 456 789</h5>
                        <h6>E-mail : support@freshmeal.com</h6>
                    </div>
                </div>
                <div className="time flex items-center">
                    <img src="./icons/clock.svg" alt="" />
                    <div>
                        <h5>Working Hours:</h5>
                        <h6>Mon - Sat (8.00am - 12.00am)</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
