import React from 'react'
import BigDealsCard from '../components/BigDealsCard'
import './BigDeal.css';
function BigDeal() {
    return (
        <section className='big-deal'>
            <div className='container'>
                <h1 className='section-heading text-pure'>Big Deals of the Week</h1>
                <div className='timer'>
                    <BigDealsCard first='02' last='Days' />
                    <BigDealsCard first='24' last='Hours' />
                    <BigDealsCard first='55' last='Minutes' />
                    <BigDealsCard first='58' last='Seconds' />


                </div>
            </div>
        </section>
    )
}

export default BigDeal
