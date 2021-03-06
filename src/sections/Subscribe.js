import React from 'react'
import './Subscribe.css';
function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container flex items-center">
                <div>
                    <img src="./images/rasberry.png" alt="" />
                </div>
                <div>
                    <h1>Subscribe to your newsletter</h1>
                    <p>Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                    web sites
                    still in their infancy.</p>
                    <div className="input-wrap">
                        <input type="email" placeholder="email@freshmeal.com" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
