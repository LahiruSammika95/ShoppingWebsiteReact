import React from 'react'
import './ServiceCard.css';
function ServiceCard({ iconName, title, type = 'secondary' }) {
    return (
        <div className='service-card magic-shadow-sm'>
            <img className='icon' src={'./icons/' + iconName + '.svg'} />
            {type === 'primary' ?
                <h2 className='text-primary'>{title}</h2> :
                <h2>{title}</h2>
            }

            <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            {type === 'primary' ?
                <button className='btn btn-primary'>Read More</button> :
                <button className='btn btn-secondary'>Read More</button>}
        </div>
    )
}

export default ServiceCard
