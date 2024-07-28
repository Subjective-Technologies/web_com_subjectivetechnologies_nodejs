console.log('Loading SubjectiveBeMyselfComponent.js');
// src/components/SubjectiveBeMyselfComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveBeMyselfComponent.module.css';

const SubjectiveBeMyselfComponent = () => {
console.log('Rendering SubjectiveBeMyselfComponent');
console.log('Rendering SubjectiveBeMyselfComponent');
console.log('Rendering SubjectiveBeMyselfComponent');
console.log('Returning from SubjectiveBeMyselfComponent');
console.log('Returning from SubjectiveBeMyselfComponent');
console.log('Returning from SubjectiveBeMyselfComponent');
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_be_myself.png" alt="Subjective BeMyself" className={styles.roundImage} />
                <p className={styles.imageText}>Discover a digital assistant that adapts to your unique lifestyle with GT® Subjective BeMyself.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective BeMyself</h1>
            <p className={styles.description}>AI Learns to BeYourSelf</p>
            <p className={styles.content}>
                GT® Subjective BeMyself uses advanced AI to understand and mimic your unique preferences and behaviors, creating a personalized digital assistant that truly represents you.
            </p>
        </div>
    );
};

export default SubjectiveBeMyselfComponent;
