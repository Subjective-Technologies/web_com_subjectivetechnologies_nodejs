console.log('Loading dashboard.js');
// pages/dashboard.js
import React from 'react';
import DashboardMenuComponent from '../components/subjective_dashboard/DashboardMenuComponent';
import DashboardContentComponent from '../components/subjective_dashboard/DashboardContentComponent';
import menuStyles from '../public/styles/DashboardMenuComponent.module.css';
import contentStyles from '../public/styles/DashboardContentComponent.module.css';
import Footer from '../components/Footer';

const DashboardPage = () => {
console.log('Rendering DashboardPage');
console.log('Returning from DashboardPage');
    return (
        <div className={menuStyles.container}>
            <DashboardMenuComponent />
            <div className={contentStyles.dashboardContainer}>
                <DashboardContentComponent />
            </div>
            <Footer/>
        </div>
    );
};

export default DashboardPage;
