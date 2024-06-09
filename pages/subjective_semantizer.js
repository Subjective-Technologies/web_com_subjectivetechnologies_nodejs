// src/pages/products/subjective_semantizer.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveSemantizerComponent = dynamic(() => import('../components/SubjectiveSemantizerComponent'), {
  ssr: false,
});

const SubjectiveSemantizer = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveSemantizerComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveSemantizer;
