console.log('Loading dashboard_my_profile.js');
import React, { useEffect } from 'react';
import DashboardMenuComponent from '../components/subjective_dashboard/DashboardMenuComponent';
import DashboardProfileComponent from '../components/subjective_dashboard/DashboardProfileComponent';

import menuStyles from '../public/styles/DashboardMenuComponent.module.css';
import contentStyles from '../public/styles/ProfileComponent.module.css';
import pageStyles from '../public/styles/DashboardPage.module.css';

import Footer from '../components/Footer';

const ProfilePage = () => {
console.log('Rendering ProfilePage');
    useEffect(() => {
        // Add the specific class to the body
        document.body.classList.add(pageStyles.dashboardBody);

        // Remove the class when the component unmounts
console.log('Returning from ProfilePage');
        return () => {
            document.body.classList.remove(pageStyles.dashboardBody);
        };
    }, []);

console.log('Returning from ProfilePage');
    return (
        <div className={menuStyles.container}>
            <DashboardMenuComponent />
            <div className={contentStyles.profileContainer}>
                <DashboardProfileComponent />
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;