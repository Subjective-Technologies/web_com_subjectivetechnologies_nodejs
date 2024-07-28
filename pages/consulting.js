console.log('Loading consulting.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const ConsultingComponent = dynamic(() => import('../components/ConsultingComponent'), {
  ssr: false,
});

const Consulting = () => {
console.log('Rendering Consulting');
console.log('Returning from Consulting');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <ConsultingComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default Consulting;
