import React from 'react'
import './Home.css';
function Home() {
    return (
        <header className='hero flex items-center'>
            <div className='container'>
                <div className='welcome flex items-center'>
                    <span>Welcome to</span>
                    <img src='./icons/logo.svg' />
                </div>
                <h1>The world best <span>shopping</span> Website</h1>
                <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                <div>
                    <button className='btn btn-primary'>Read More</button>
                    <button className='btn btn-secondary'>Shop Now</button>
                </div>
                <div className='hero-image'>
                    <img src='./images/straw.png' />
                </div>
            </div>
        </header>
    )
}

export default Home
