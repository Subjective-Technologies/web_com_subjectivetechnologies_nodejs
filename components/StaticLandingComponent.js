
import React from 'react';
import styles from './StaticLanding.module.css';
import Image from 'next/image';
import worktwinsImage from '../public/images/worktwins.png';

const StaticLandingComponent = () => {
    return (
        <div className={styles.container}>
            <Image src={worktwinsImage} alt="WorkTwins" className={styles.fullWidthImage} />
            <h1 className={styles.title}>Welcome to the Static Landing Page</h1>
            <p className={styles.description}>
                This is the static landing page. You can customize this section with relevant content.
            </p>
        </div>
    );
};

export default StaticLandingComponent;
