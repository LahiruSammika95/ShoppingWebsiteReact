import React from 'react'
import './AboutMeal.css';
function AboutMeal() {
    return (
        <section className='about-meal'>
            <div className='container'>
                <h1 className='section-heading'>About Fresh Meal</h1>
                <div className='about-meal-wrap flex'>
                    <div className='flex-1'>
                        <img src='./images/yogurt.png' />
                    </div>
                    <div className='text-content flex-1 '>
                        <h2>Freshmeal is a long elements must have an alt prop, either with meaningful text.</h2>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid,
                        navigable address as the href value. If you cannot provide a valid href,
                        but still need the element to resemble a link,
                         use a button and change it with appropriate styles.</p>
                        <button className='btn btn-secondary'>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeal
