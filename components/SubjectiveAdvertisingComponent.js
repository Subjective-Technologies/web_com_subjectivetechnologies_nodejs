// src/components/SubjectiveAdvertisingComponent.js
import React from 'react';
import styles from '../styles/SubjectiveAdvertisingComponent.module.css';

const SubjectiveAdvertisingComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GT® Subjective Advertising</h1>
            <p className={styles.description}>MarketingLess Advertising</p>
            <p className={styles.content}>
                GT® Subjective Advertising transforms the marketing landscape with personalized, unobtrusive advertising that resonates with individual preferences and needs, reducing the noise and increasing engagement.
            </p>
        </div>
    );
};

export default SubjectiveAdvertisingComponent;
