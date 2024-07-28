console.log('Loading SubjectiveForMateComponent.js');
// src/components/SubjectiveForMateComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveForMateComponent.module.css';

const SubjectiveForMateComponent = () => {
console.log('Rendering SubjectiveForMateComponent');
console.log('Rendering SubjectiveForMateComponent');
console.log('Rendering SubjectiveForMateComponent');
console.log('Returning from SubjectiveForMateComponent');
console.log('Returning from SubjectiveForMateComponent');
console.log('Returning from SubjectiveForMateComponent');
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_formate.png" alt="Subjective ForMate" className={styles.roundImage} />
                <p className={styles.imageText}>Streamline your workflows with GT® Subjective ForMate, eliminating the hassle of forms.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective ForMate</h1>
            <p className={styles.description}>No More Forms</p>
            <p className={styles.content}>
                GT® Subjective ForMate eliminates the need for tedious forms. With intuitive data collection and smart processing, it simplifies interactions and improves efficiency in data management.
            </p>
        </div>
    );
};

export default SubjectiveForMateComponent;
