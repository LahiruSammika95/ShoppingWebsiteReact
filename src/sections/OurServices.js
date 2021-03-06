import React from 'react'
import ServiceCard from '../components/ServiceCard'
import './OurServices.css';
function OurServices() {
    return (

        <section className='our-services'>
            <div className='container'>
                <h1 className='section-heading'>Our Services</h1>
                <div className='card-wrapper flex '>
                    <ServiceCard iconName='transport' title='Free home delivery' type='secondary' />
                    <ServiceCard iconName='bag' title='30 days return service' type='primary' />
                    <ServiceCard iconName='usd' title='Money back guarantee' type='secondary' />


                </div>
            </div>
        </section>

    )
}

export default OurServices
