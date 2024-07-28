console.log('Loading how_it_works.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const HowItWorksComponent = dynamic(() => import('../components/HowItWorksComponent'), {
  ssr: false,
});

const HowItWorks = () => {
console.log('Rendering HowItWorks');
console.log('Returning from HowItWorks');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <HowItWorksComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default HowItWorks;
