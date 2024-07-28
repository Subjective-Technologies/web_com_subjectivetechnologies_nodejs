console.log('Loading SubjectiveInstantJobFinderComponent.js');
// src/components/SubjectiveInstantJobFinderComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveInstantJobFinderComponent.module.css';

const SubjectiveInstantJobFinderComponent = () => {
console.log('Rendering SubjectiveInstantJobFinderComponent');
console.log('Returning from SubjectiveInstantJobFinderComponent');
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_instant_job_finder.png" alt="Instant Job Finder" className={styles.roundImage} />
                <p className={styles.imageText}>Connect instantly to your dream job with GT® Instant Job Finder.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective Instant Job Finder</h1>
            <p className={styles.description}>Just Sit&Work</p>
            <p className={styles.content}>
                The GT® Subjective Instant Job Finder connects you with job opportunities instantly. Utilizing advanced AI matching algorithms, it ensures you find the perfect job without the hassle of searching.
            </p>
        </div>
    );
};

export default SubjectiveInstantJobFinderComponent;
