console.log('Loading subjective_cognitive_booster.js');
// src/pages/products/subjective_cognitive_booster.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveCognitiveBoosterComponent = dynamic(() => import('../components/SubjectiveCognitiveBoosterComponent'), {
  ssr: false,
});

const SubjectiveCognitiveBooster = () => {
console.log('Rendering SubjectiveCognitiveBooster');
console.log('Returning from SubjectiveCognitiveBooster');
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveCognitiveBoosterComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveCognitiveBooster;
