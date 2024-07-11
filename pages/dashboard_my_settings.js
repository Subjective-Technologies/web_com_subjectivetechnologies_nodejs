import React, { useEffect } from 'react';
import DashboardMenuComponent from '../components/subjective_dashboard/DashboardMenuComponent';
import SettingsComponent from '../components/subjective_dashboard/DashboardSettingsComponent';

import menuStyles from '../public/styles/DashboardMenuComponent.module.css';
import contentStyles from '../public/styles/SettingsComponent.module.css';
import pageStyles from '../public/styles/DashboardPage.module.css';

import Footer from '../components/Footer';

const SettingsPage = () => {
    useEffect(() => {
        // Add the specific class to the body
        document.body.classList.add(pageStyles.dashboardBody);

        // Remove the class when the component unmounts
        return () => {
            document.body.classList.remove(pageStyles.dashboardBody);
        };
    }, []);

    return (
        <div className={menuStyles.container}>
            <DashboardMenuComponent />
            <div className={contentStyles.settingsContainer}>
                <SettingsComponent />
            </div>
            <Footer />
        </div>
    );
};

export default SettingsPage;
