import React from 'react';
import styles from '../public/styles/SubjectiveLogisticsComponent.module.css';

const SubjectiveLogisticsComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>GT® Subjective Logistics</h1>
            <p className={styles.description}>
                GT® Subjective Logistics revolutionizes the way we think about and handle logistics, removing the need for traditional postal services. 
                Experience seamless, efficient, and intelligent logistics solutions tailored to your needs.
            </p>
            <div className={styles.features}>
                <h2 className={styles.subheading}>Key Features:</h2>
                <ul>
                    <li>Real-time tracking and updates</li>
                    <li>Intelligent route optimization</li>
                    <li>Automated scheduling and dispatch</li>
                    <li>Seamless integration with other GT® products</li>
                    <li>Environmentally friendly and sustainable solutions</li>
                </ul>
            </div>
            <div className={styles.contactInfo}>
                <h2 className={styles.subheading}>Get in Touch</h2>
                <p className={styles.text}>
                    For more information about GT® Subjective Logistics, please contact us at <a href="mailto:logistics@subjectivetechnologies.com">logistics@subjectivetechnologies.com</a>.
                </p>
            </div>
        </div>
    );
};

export default SubjectiveLogisticsComponent;
