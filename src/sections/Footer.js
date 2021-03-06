import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="box">
                        <h3>About us</h3>
                        <p>It was popularised in the 1960 with the release of Latest sheets containing Lorem Ipsum
                                passage.</p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                    <div className="box">
                        <h3>Quik Links</h3>
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
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Gallery</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>

                        </ul>
                    </div>
                    <div className="box">
                        <h3>Follow Us</h3>
                        <div>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/codersgyan">
                                        <img src="./icons/facebook.svg" alt="" />
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/CoderGyan">
                                        <img src="./icons/twitter.svg" alt="" />
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./icons/google.svg" alt="" />
                                        <span>Google +</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/codersgyan/">
                                        <img src="./icons/instagram.svg" alt="" />
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box instagram-api">
                        <h3>Instagram</h3>
                        <div className="post-wrap">
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="copyright">
                <div>
                    Copyright © 2020 .All rights reserved by <a href="https://www.instagram.com/codersgyan/">Coder's Gyan</a>.
                    </div>
            </footer>
        </div>
    )
}

export default Footer
