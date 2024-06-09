// src/components/SubjectiveInstantJobFinderComponent.js
import React from 'react';
import styles from '../styles/SubjectiveInstantJobFinderComponent.module.css';

const SubjectiveInstantJobFinderComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GT® Subjective Instant Job Finder</h1>
            <p className={styles.description}>Just Sit&Work</p>
            <p className={styles.content}>
                The GT® Subjective Instant Job Finder connects you with job opportunities instantly. Utilizing advanced AI matching algorithms, it ensures you find the perfect job without the hassle of searching.
            </p>
        </div>
    );
};

export default SubjectiveInstantJobFinderComponent;
