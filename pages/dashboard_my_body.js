console.log('Loading dashboard_my_body.js');
// pages/dashboard_my_body.js
import React, { useEffect } from 'react';
import DashboardMenuComponent from '../components/subjective_dashboard/DashboardMenuComponent';
import DashboardMyBodyComponent from '../components/subjective_dashboard/DashboardMyBodyComponent';

import menuStyles from '../public/styles/DashboardMenuComponent.module.css';
import contentStyles from '../public/styles/DashboardMyBodyComponent.module.css';
import pageStyles from '../public/styles/DashboardPage.module.css';

import Footer from '../components/Footer';

const DashboardPage = () => {
console.log('Rendering DashboardPage');
    useEffect(() => {
        // Add the specific class to the body
        document.body.classList.add(pageStyles.dashboardBody);

        // Remove the class when the component unmounts
console.log('Returning from DashboardPage');
        return () => {
            document.body.classList.remove(pageStyles.dashboardBody);
        };
    }, []);

console.log('Returning from DashboardPage');
    return (
        <div className={menuStyles.container}>
            <DashboardMenuComponent />
            <div className={contentStyles.dashboardContainer}>
                <DashboardMyBodyComponent />
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;
