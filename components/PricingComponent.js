import React from 'react';
import styles from '../public/styles/PricingComponent.module.css';

const PricingComponent = () => {
  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.heading}>Choose Your Plan</h1>
      <div className={styles.pricingTable}>
        
        {/* Developer Plan - Free */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Developer Plan</h2>
          <div className={styles.planPrice}>Free</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>✔</span> WorkFootPrint Creation</li>
            <li><span className={styles.checkmark}>✔</span> Real-Time Collaboration</li>
            <li><span className={styles.checkmark}>✔</span> Job Opportunities</li>
            <li><span className={styles.checkmark}>✔</span> GitHub Integration</li>
          </ul>
          <button className={styles.button}>Sign Up</button>
        </div>
        
        {/* Business Essential Plan */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Business Essential Plan</h2>
          <div className={styles.planPrice}>$499/month</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>✔</span> Access to WorkFootPrints</li>
            <li><span className={styles.checkmark}>✔</span> Up to 5 Hires/Month</li>
            <li><span className={styles.checkmark}>✔</span> Performance Analytics</li>
            <li><span className={styles.crossmark}>✖</span> Custom Filters</li>
          </ul>
          <button className={styles.button}>Get Started</button>
        </div>
        
        {/* Business Pro Plan */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Business Pro Plan</h2>
          <div className={styles.planPrice}>$1,499/month</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>✔</span> Advanced Matching Algorithms</li>
            <li><span className={styles.checkmark}>✔</span> Up to 20 Hires/Month</li>
            <li><span className={styles.checkmark}>✔</span> Collaboration Tools</li>
            <li><span className={styles.checkmark}>✔</span> Custom Filters</li>
          </ul>
          <button className={styles.button}>Get Started</button>
        </div>

        {/* Enterprise Plan */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>Enterprise Plan</h2>
          <div className={styles.planPrice}>$3,999+/month</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>✔</span> Unlimited WorkFootPrints</li>
            <li><span className={styles.checkmark}>✔</span> Full Suite of Tools</li>
            <li><span className={styles.checkmark}>✔</span> Workforce Organization</li>
            <li><span className={styles.checkmark}>✔</span> Dedicated Account Manager</li>
          </ul>
          <button className={styles.button}>Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default PricingComponent;
