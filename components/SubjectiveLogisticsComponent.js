// src/components/SubjectiveLogisticsComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveLogisticsComponent.module.css';

const SubjectiveLogisticsComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_logistics.png" alt="Logistics" className={styles.roundImage} />
                <p className={styles.imageText}>Connect instantly to your dream job with GT® Subjective Logistics.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective Logistics</h1>
            <p className={styles.description}>Just Sit&Work</p>
            <p className={styles.content}>
                The GT® Subjective Logistics connects you with job opportunities instantly. Utilizing advanced AI matching algorithms, it ensures you find the perfect job without the hassle of searching.
            </p>
        </div>
    );
};

export default SubjectiveLogisticsComponent;
