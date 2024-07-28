console.log('Loading careers.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const CareersComponent = dynamic(() => import('../components/CareersComponent'), {
  ssr: false,
});

const Careers = () => {
console.log('Rendering Careers');
console.log('Returning from Careers');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <CareersComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default Careers;
