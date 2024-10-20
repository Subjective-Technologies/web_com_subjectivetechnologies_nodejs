import { getText } from '../utils/getText.js';
import React from 'react';
import styles from '../public/styles/PricingComponent.module.css';
const PricingComponent = () => {
  return <div className={styles.pricingContainer}>
      <h1 className={styles.heading}>{getText('PricingComponent.js_16_Q2hvb3')}</h1>
      <div className={styles.pricingTable}>
        
        {/* Developer Plan - Free */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>{getText('PricingComponent.js_14_RGV2ZW')}</h2>
          <div className={styles.planPrice}>{getText('PricingComponent.js_4_RnJlZQ')}</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_22_V29ya0')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_23_UmVhbC')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_17_Sm9iIE')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_18_R2l0SH')}</li>
          </ul>
          <button className={styles.button}>{getText('PricingComponent.js_7_U2lnbi')}</button>
        </div>
        
        {/* Business Essential Plan */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>{getText('PricingComponent.js_23_QnVzaW')}</h2>
          <div className={styles.planPrice}>{getText('PricingComponent.js_10_JDQ5OS')}</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_24_QWNjZX')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_19_VXAgdG')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_21_UGVyZm')}</li>
            <li><span className={styles.crossmark}>{getText('PricingComponent.js_1_4pyW')}</span>{getText('PricingComponent.js_14_Q3VzdG')}</li>
          </ul>
          <button className={styles.button}>{getText('PricingComponent.js_11_R2V0IF')}</button>
        </div>
        
        {/* Business Pro Plan */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>{getText('PricingComponent.js_17_QnVzaW')}</h2>
          <div className={styles.planPrice}>{getText('PricingComponent.js_12_JDEsND')}</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_28_QWR2YW')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_20_VXAgdG')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_19_Q29sbG')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_14_Q3VzdG')}</li>
          </ul>
          <button className={styles.button}>{getText('PricingComponent.js_11_R2V0IF')}</button>
        </div>

        {/* Enterprise Plan */}
        <div className={styles.plan}>
          <h2 className={styles.planTitle}>{getText('PricingComponent.js_15_RW50ZX')}</h2>
          <div className={styles.planPrice}>{getText('PricingComponent.js_13_JDMsOT')}</div>
          <ul className={styles.features}>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_24_VW5saW')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_19_RnVsbC')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_22_V29ya2')}</li>
            <li><span className={styles.checkmark}>{getText('PricingComponent.js_1_4pyU')}</span>{getText('PricingComponent.js_25_RGVkaW')}</li>
          </ul>
          <button className={styles.button}>{getText('PricingComponent.js_11_R2V0IF')}</button>
        </div>

      </div>
    </div>;
};
export default PricingComponent;