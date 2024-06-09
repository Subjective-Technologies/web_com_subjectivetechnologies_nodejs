// src/pages/products/subjective_be_myself.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveBeMyselfComponent = dynamic(() => import('../components/SubjectiveBeMyselfComponent'), {
  ssr: false,
});

const SubjectiveBeMyself = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveBeMyselfComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveBeMyself;
