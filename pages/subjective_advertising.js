console.log('Loading subjective_advertising.js');
// src/pages/products/subjective_advertising.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveAdvertisingComponent = dynamic(() => import('../components/SubjectiveAdvertisingComponent'), {
  ssr: false,
});

const SubjectiveAdvertising = () => {
console.log('Rendering SubjectiveAdvertising');
console.log('Returning from SubjectiveAdvertising');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveAdvertisingComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveAdvertising;
