import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveLogisticsComponent = dynamic(() => import('../components/SubjectiveLogisticsComponent'), {
  ssr: false,
});

const SubjectiveLogistics = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="content_container">
                <SubjectiveLogisticsComponent />
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default SubjectiveLogistics;
