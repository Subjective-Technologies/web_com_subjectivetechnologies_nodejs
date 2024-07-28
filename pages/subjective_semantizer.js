console.log('Loading subjective_semantizer.js');
// src/pages/products/subjective_semantizer.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveSemantizerComponent = dynamic(() => import('../components/SubjectiveSemantizerComponent'), {
  ssr: false,
});

const SubjectiveSemantizer = () => {
console.log('Rendering SubjectiveSemantizer');
console.log('Returning from SubjectiveSemantizer');
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
