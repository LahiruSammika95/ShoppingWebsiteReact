import React from 'react'
import './BigDealsCard.css';
function BigDealsCard({ first, last }) {
    return (
        <div className='card'>
            <span>{first}</span>
            <span>{last}</span>
        </div>
    )
}

export default BigDealsCard
