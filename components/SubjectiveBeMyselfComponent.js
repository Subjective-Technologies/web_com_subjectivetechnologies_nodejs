// src/components/SubjectiveBeMyselfComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveBeMyselfComponent.module.css';

const SubjectiveBeMyselfComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GT® Subjective BeMyself</h1>
            <p className={styles.description}>AI Learns to BeYourSelf</p>
            <p className={styles.content}>
                GT® Subjective BeMyself uses advanced AI to understand and mimic your unique preferences and behaviors, creating a personalized digital assistant that truly represents you.
            </p>
        </div>
    );
};

export default SubjectiveBeMyselfComponent;
