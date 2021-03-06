import React from 'react'
import './LatestNewsCard.css';
function LatestNewsCard({ imgName, title }) {
    return (
        <article className='card magic-shadow-sm'>
            <div>
                <img src={'./images/' + imgName + '.jpg'} alt='' />
            </div>
            <div className='card-content'>
                <div className='post-meta flex items-center justify-between'>
                    <p>July 03, 2017</p>
                    <div className='flex'>
                        <p>Posted by <strong>FreshMeal</strong></p>
                        <p className='comment-count'>12 comments</p>
                    </div>
                </div>
                <h2>{title}</h2>
                <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
            </div>
        </article>
    )
}

export default LatestNewsCard






