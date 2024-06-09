// src/pages/products/subjective_adapter.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveAdapterComponent = dynamic(() => import('../components/SubjectiveAdapterComponent'), {
  ssr: false,
});

const SubjectiveAdapter = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveAdapterComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveAdapter;
