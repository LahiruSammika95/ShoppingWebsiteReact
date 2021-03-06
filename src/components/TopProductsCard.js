import React from 'react'
import './TopProductsCard.css';
function TopProductsCard() {
    return (
        <div className='food-card magic-shadow'>
            <div className='product-image flex items-center justify-center'>
                <img src='./images/plate-3.png' />
            </div>
            <hr />
            <div>
                <h2 className='text-center'>Summer Salad</h2>
                <div className='stars flex justify-center items-center'>
                    <img src='./icons/start-filled.svg' />
                    <img src='./icons/start-filled.svg' />
                    <img src='./icons/start-filled.svg' />
                    <img src='./icons/star-grey.svg' />
                    <img src='./icons/star-grey.svg' />
                </div>
                <div className='price text-center'>
                    $1.22
            </div>
                <div className='flex justify-center'>
                    <button><img src='./icons/cart-2.svg' />
                        <p>Add to cart</p></button>

                </div>
            </div>
        </div>
    )
}

export default TopProductsCard
