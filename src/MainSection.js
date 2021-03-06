import React, { useState } from "react"
import logo from './logo.svg';

import Header from './sections/Header';
import Home from './sections/Home';
import TopProducts from './sections/TopProducts';
import AboutMeal from './sections/AboutMeal';
import OurServices from './sections/OurServices';
import BigDeal from './sections/BigDeal';
import LatestNews from './sections/LatestNews';
import Subscribe from './sections/Subscribe';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import MobileNav from "./sections/MobileNav";

function MainSection() {
    const [trigger, setTrigger] = useState(false)
    const triggerFunc = () => {
        setTrigger(!trigger);
    }
    return (
        <div className="main-wrapper">
            <MobileNav />

            <div className={trigger ? 'site-content-wrapper scaled' : 'site-content-wrapper'}>
                {/* ...........................this is for the icon................................. */}
                <div className="nav-trigger" onClick={triggerFunc}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-bar-chart">
                        <line x1="12" y1="20" x2="12" y2="10" />
                        <line x1="18" y1="20" x2="18" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="16" /></svg>

                </div>
                {/* ...........................this is for the icon................................. */}
                <div className="site-content">
                    <Header />
                    <Home />
                    <TopProducts />
                    <AboutMeal />
                    <OurServices />
                    <BigDeal />
                    <LatestNews />
                    <Subscribe />
                    <ContactUs />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainSection
