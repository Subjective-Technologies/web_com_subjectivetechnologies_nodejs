import React from 'react';
import styles from '../styles/HowItWorksComponent.module.css';

const HowItWorksComponent = () => {
    return (
        <div className={styles.howItWorksContainer}>
            <h1 className={styles.title}>How It Works</h1>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>Introduction</h2>
                <p className={styles.text}>
                    Discover how Subjective Technologies transform the way humans and machines interact.
                    Learn about our cutting-edge research in Human-Computer Interaction and Swarm Intelligence.
                </p>
                <div className={styles.imagePlaceholder}>
                    <p>Introduction Image</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Our Approach</h2>
                <p className={styles.text}>
                    Our approach integrates the latest advancements in technology with user-centric design principles.
                    We aim to create intuitive, efficient, and effective solutions that enhance human capabilities.
                </p>
                <div className={styles.videoPlaceholder}>
                    <video className={styles.video} src="video/brainboost_marketing_videos_goldenthinker_throw_ball.mp4" autoPlay muted loop />
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>The Technology</h2>
                <p className={styles.text}>
                    Subjective Technologies utilize state-of-the-art algorithms and hardware to deliver unparalleled performance and reliability.
                    Our systems are designed to adapt and evolve with user needs, ensuring long-term satisfaction and utility.
                </p>
                <div className={styles.imagePlaceholder}>
                    <p>Technology Image</p>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksComponent;
