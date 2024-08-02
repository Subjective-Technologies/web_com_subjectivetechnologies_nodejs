// pages/dashboard_my_body.js
import React, { useEffect } from 'react';
import DashboardMenuComponent from '../components/subjective_dashboard/DashboardMenuComponent';
import DashboardMyBodyComponent from '../components/subjective_dashboard/DashboardMyBodyComponent';
import menuStyles from '../public/styles/DashboardMenuComponent.module.css';
import contentStyles from '../public/styles/DashboardMyBodyComponent.module.css';
import pageStyles from '../public/styles/DashboardPage.module.css';
import Footer from '../components/Footer';

const DashboardPage = () => {
  useEffect(() => {
    document.body.classList.add(pageStyles.dashboardBody);

    return () => {
      document.body.classList.remove(pageStyles.dashboardBody);
    };
  }, []);

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
