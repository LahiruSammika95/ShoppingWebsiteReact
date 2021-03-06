import React from 'react'
import './ContactUs.css';
function ContactUs() {
    return (
        <section className="contact-us flex">
            <div className="contact-info-wrapper">
                <h1 className="section-heading">Contact us</h1>
                <div className="contact-info">
                    <div>
                        <div>
                            <img src="./icons/phone-2.svg" alt="" />
                            <div>
                                <h5>Call Us: (+94) 123 232 432</h5>
                                <h6>support@foodlanka.com</h6>
                            </div>
                        </div>
                        <div>
                            <img src="./icons/bag-2.svg" alt="" />
                            <div>
                                <h5>E-mail ::</h5>
                                <h6>support@freshmeal.com</h6>
                            </div>
                        </div>
                        <div>
                            <img src="./icons/clock-2.svg" alt="" />
                            <div>
                                <h5>Working Hours:</h5>
                                <h6>Mon - Sat (8.00am - 12.00am)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7865490534928!2d79.90650685032851!3d6.795805521799104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2454f7926f4bf%3A0x79adf59fe64730e0!2sSampath%20Electricals%20(LED%20and%20Electrical%20items)!5e0!3m2!1sen!2slk!4v1615010777148!5m2!1sen!2slk" width="100%" height="100%" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </section>
    )
}

export default ContactUs
