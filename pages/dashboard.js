// pages/dashboard.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from '../public/styles/DashboardContentComponent.module.css'

const MenuFromDashboardComponent = dynamic(() => import('../components/MenuFromDashboardComponent'), {
    ssr: false,
});

const DashboardContentComponent = dynamic(() => import('../components/DashboardContentComponent'), {
    ssr: false,
});

const Dashboard = () => {
    return (

        <div className="container">
        <div className="menu_container">
          <Menu />
        </div>
        <div className="animation_container">
            <div className={styles.dashboardWrapper}>
                <div className={styles.dashboardContainer}>
                    <div className={styles.menuContainer}>
                        <MenuFromDashboardComponent />
                    </div>
                    <div className={styles.contentContainer}>
                        <DashboardContentComponent />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        <div className="footer_container">
          <Footer />
        </div>
      </div>
    );
};

export default Dashboard;
