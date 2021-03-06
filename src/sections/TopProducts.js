import React from 'react'
import TopProductsCard from '../components/TopProductsCard'
import './TopProducts.css';
function TopProducts() {
    return (
        <section className='top-products '>
            <div className='container'>
                <h1 className='section-heading'>Top Products</h1>
                <div className='slider'>
                    <button className='slider-btn prev-btn'><img src='./icons/pre.svg' /></button>
                    <button className='slider-btn next-btn'><img src='./icons/next.svg' /></button>
                    <div className='food-slider flex justify-center'>

                        <TopProductsCard />
                        <TopProductsCard />
                        <TopProductsCard />


                    </div>
                </div>
                <div className='text-center btn-wrapper'><button className='btn btn-secondary'>View More</button></div>
            </div>

        </section>
    )
}

export default TopProducts
