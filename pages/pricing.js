console.log('Loading investor.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const PricingComponent = dynamic(() => import('../components/PricingComponent'), {
  ssr: false,
});

const Pricing = () => {
console.log('Rendering Pricing');
console.log('Returning from Pricing');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <PricingComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default Pricing;
