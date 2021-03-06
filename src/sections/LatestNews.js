import React from 'react'
import LatestNewsCard from '../components/LatestNewsCard'
import './LatestNews.css';
function LatestNews() {
    return (
        <section className='latest-news'>
            <div className='container '>
                <h1 className='section-heading'>Latest News From Blog</h1>
                <div className='article-wrapper justify-center items-center'>
                    <LatestNewsCard title='This is the title of the card' imgName='donut' />
                    <LatestNewsCard title='This is the title of the card' imgName='coffee' />
                </div>
                <div className='text-center btn-wrapper'>
                    <button className='btn btn-secondary'>View All</button>

                </div>
            </div>
        </section>
    )
}

export default LatestNews
