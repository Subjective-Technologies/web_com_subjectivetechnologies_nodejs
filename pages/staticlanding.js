import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import StaticLandingComponent from '../components/StaticLandingComponent';

const StaticLandingPage = () => {
    return (
        <>
            <Menu /> {/* Menu component should be fixed */}
            <StaticLandingComponent /> {/* This will account for the Menu's height */}
            <Footer />
        </>
    );
};

export default StaticLandingPage;
