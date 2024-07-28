console.log('Loading SubjectiveAdvertisingComponent.js');
// src/components/SubjectiveAdvertisingComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveAdvertisingComponent.module.css'; // Make sure the CSS path is correct

const SubjectiveAdvertisingComponent = () => {
console.log('Rendering SubjectiveAdvertisingComponent');
console.log('Rendering SubjectiveAdvertisingComponent');
console.log('Rendering SubjectiveAdvertisingComponent');
console.log('Returning from SubjectiveAdvertisingComponent');
console.log('Returning from SubjectiveAdvertisingComponent');
console.log('Returning from SubjectiveAdvertisingComponent');
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_advertising.png" alt="Subjective Advertising" className={styles.roundImage} />
                <p className={styles.imageText}>Explore the new era of personalized advertising with GT® Subjective Advertising.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective Advertising</h1>
            <p className={styles.description}>MarketingLess Advertising</p>
            <p className={styles.content}>
                GT® Subjective Advertising transforms the marketing landscape with personalized, unobtrusive advertising that resonates with individual preferences and needs, reducing the noise and increasing engagement.
            </p>
        </div>
    );
};

export default SubjectiveAdvertisingComponent;
