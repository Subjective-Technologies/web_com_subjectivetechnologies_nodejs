// src/components/SubjectiveAdapterComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveAdapterComponent.module.css';

const SubjectiveAdapterComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_adapter.png" alt="Subjective Adapter" className={styles.roundImage} />
                <p className={styles.imageText}>Seamlessly transition to the future of technology with the GT® Subjective Adapter.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective Adapter</h1>
            <p className={styles.description}>Migrating from legacy 3rd Person Technology</p>
            <p className={styles.content}>
                GT® Subjective Adapter makes it easy to transition from outdated third-person technology to modern, intuitive systems. Enhance your productivity and embrace the future with seamless migration solutions.
            </p>
        </div>
    );
};

export default SubjectiveAdapterComponent;
