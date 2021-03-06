import React from 'react'
import './Header.css';
function Header() {
    return (
        <>
            <header className='topbar'>
                <div className='container flex justify-between items-center'>
                    <div className='icons'>
                        <a href=''><img src='./icons/facebook.svg' /></a>
                        <a href=''><img src='./icons/twitter.svg' /></a>
                        <a href=''><img src='./icons/google.svg' /></a>
                        <a href=''><img src='./icons/instagram.svg' /></a>
                        <a href=''><img src='./icons/search.svg' /></a>
                    </div>
                    <div className='auth flex items-center'>
                        <div>
                            <img src='./icons/user-icon.svg' alt='' />
                            <a href=''>Login</a>
                        </div>
                        <span className='divider'>|</span>
                        <div>
                            <img src='./icons/edit.svg' alt='' />
                            <a href=''>Register Now</a>
                        </div>
                        <span className='divider'>|</span>
                        <div>
                            <img src='./icons/cart.svg' alt='' />
                            <a href=''>0 Items - ($0.00)</a>
                        </div>
                    </div>
                </div>

            </header>
            <nav>
                <div className='top'>
                    <div className='container flex justify-between '>
                        <div className='contact flex items-center'>
                            <img src='./icons/phone.svg' />
                            <div>
                                <h5>Call Us: (+94) 123 232 432</h5>
                                <h6>support@foodlanka.com</h6>
                            </div>
                        </div>
                        <div className='branding'>
                            <img src='./icons/logo.svg' />
                        </div>
                        <div className='time flex items-center'>
                            <img src='./icons/clock.svg' />
                            <div>
                                <h5>Working Hours</h5>
                                <h6>Mon - Sat (8.00AM - 7.00PM)</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbar magic-shadow'>
                    <div className='container flex justify-center'>
                        <a href='' className='active'>Home</a>
                        <a href=''>About Us</a>
                        <a href=''>Products</a>
                        <a href=''>Blog</a>
                        <a href=''>Shop</a>
                        <a href=''>Services</a>
                        <a href=''>Gallery</a>
                        <a href=''>Contact Us</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
