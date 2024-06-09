// src/pages/products/subjective_instant_job_finder.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveInstantJobFinderComponent = dynamic(() => import('../components/SubjectiveInstantJobFinderComponent'), {
  ssr: false,
});

const SubjectiveInstantJobFinder = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveInstantJobFinderComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveInstantJobFinder;
