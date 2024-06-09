// src/pages/consulting.js

import React from 'react';
import styles from '../styles/ConsultingComponent.module.css';

const ConsultingComponent = () => {
    return (
        <div className={styles.consultingContainer}>
            <h1 className={styles.title}>Consulting Services</h1>
            <p className={styles.description}>
                At Subjective Technologies, we offer expert consulting services in Human-Computer Interaction, Swarm Intelligence, and more. Our team of experienced professionals is here to help you navigate the complexities of modern technology and achieve your goals.
            </p>
            <div className={styles.servicesList}>
                <h2 className={styles.subheading}>Our Services Include:</h2>
                <ul>
                    <li>Technology Strategy and Planning</li>
                    <li>Custom Software Development</li>
                    <li>System Integration</li>
                    <li>Data Analysis and Visualization</li>
                    <li>Project Management</li>
                </ul>
            </div>
            <div className={styles.contactInfo}>
                <h2 className={styles.subheading}>Get in Touch</h2>
                <p className={styles.text}>
                    If you're interested in our consulting services, please contact us at <a href="mailto:consulting@subjectivetechnologies.com">consulting@subjectivetechnologies.com</a>.
                </p>
            </div>
        </div>
    );
};

export default ConsultingComponent;
