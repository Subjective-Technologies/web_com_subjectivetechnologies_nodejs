// src/components/SubjectiveForMateComponent.js
import React from 'react';
import styles from '../styles/SubjectiveForMateComponent.module.css';

const SubjectiveForMateComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GT® Subjective ForMate</h1>
            <p className={styles.description}>No More Forms</p>
            <p className={styles.content}>
                GT® Subjective ForMate eliminates the need for tedious forms. With intuitive data collection and smart processing, it simplifies interactions and improves efficiency in data management.
            </p>
        </div>
    );
};

export default SubjectiveForMateComponent;
