import React from 'react';
import DashboardMenuComponent from '../components/subjective_dashboard/DashboardMenuComponent';
import DashboardBillingAndPaymentComponent from '../components/subjective_dashboard/DashboardBillingAndPaymentComponent';

import menuStyles from '../public/styles/DashboardMenuComponent.module.css';
import contentStyles from '../public/styles/DashboardBillingAndPaymentComponent.module.css';

import Footer from '../components/Footer';

const DashboardBillingAndPaymentPage = () => {
    return (
        <div className={menuStyles.container}>
            <DashboardMenuComponent />
            <div className={contentStyles.dashboardContainer}>
                <DashboardBillingAndPaymentComponent />
            </div>
            <Footer />
        </div>
    );
};

export default DashboardBillingAndPaymentPage;
