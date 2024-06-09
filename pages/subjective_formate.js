// src/pages/products/subjective_formate.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveForMateComponent = dynamic(() => import('../components/SubjectiveForMateComponent'), {
  ssr: false,
});

const SubjectiveForMate = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveForMateComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveForMate;
