// src/components/SubjectiveSemantizerComponent.js
import React from 'react';
import styles from '../styles/SubjectiveSemantizerComponent.module.css';

const SubjectiveSemantizerComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GT® Subjective Semantizer</h1>
            <p className={styles.description}>Knowledge Is Alive</p>
            <p className={styles.content}>
                The GT® Subjective Semantizer revolutionizes the way we interact with knowledge. Leveraging advanced AI and semantic technologies, it transforms static data into dynamic, living knowledge, making information more accessible, interactive, and useful.
            </p>
        </div>
    );
};

export default SubjectiveSemantizerComponent;