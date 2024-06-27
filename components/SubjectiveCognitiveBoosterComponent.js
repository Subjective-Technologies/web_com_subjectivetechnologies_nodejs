// src/components/SubjectiveCognitiveBoosterComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveCognitiveBoosterComponent.module.css'; // Make sure the CSS path is correct

const SubjectiveCognitiveBoosterComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_cognitive_booster.png" alt="Cognitive Booster" className={styles.roundImage} />
                <p className={styles.imageText}>Enhance your cognitive abilities with the GT® Subjective Cognitive Booster.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective Cognitive Booster</h1>
            <p className={styles.description}>Your World is Unforgettable</p>
            <p className={styles.content}>
                The GT® Subjective Cognitive Booster enhances your memory and cognitive functions. Using cutting-edge neuroscience, it helps you retain and recall information effortlessly, making your world truly unforgettable.
            </p>
        </div>
    );
};

export default SubjectiveCognitiveBoosterComponent;
