console.log('Loading investor.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const InvestorComponent = dynamic(() => import('../components/InvestorComponent'), {
  ssr: false,
});

const Investors = () => {
console.log('Rendering Investors');
console.log('Returning from Investors');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <InvestorComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default Investors;
