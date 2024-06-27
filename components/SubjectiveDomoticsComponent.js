// src/components/SubjectiveDomoticsComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveDomoticsComponent.module.css';

const SubjectiveDomoticsComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_domotics.png" alt="Subjective Domotics" className={styles.roundImage} />
                <p className={styles.imageText}>Experience the future of home automation with GT® Subjective Domotics.</p>
            </div>
            <h1 className={styles.title}>GT® Subjective Domotics</h1>
            <p className={styles.description}>Extend Your Body PhysicalBodyParts</p>
            <p className={styles.content}>
                GT® Subjective Domotics integrates your home and personal devices into a seamless, intelligent network. Control your environment and extend your physical capabilities with intuitive, easy-to-use technology.
            </p>
        </div>
    );
};

export default SubjectiveDomoticsComponent;
