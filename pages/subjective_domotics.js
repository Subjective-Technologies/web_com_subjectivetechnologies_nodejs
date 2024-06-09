// src/pages/products/subjective_domotics.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveDomoticsComponent = dynamic(() => import('../components/SubjectiveDomoticsComponent'), {
  ssr: false,
});

const SubjectiveDomotics = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveDomoticsComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveDomotics;
