console.log('Loading CareersComponent.js');
import React from 'react';
import styles from '../public/styles/CareersComponent.module.css';

const CareersComponent = () => {
console.log('Rendering CareersComponent');
console.log('Rendering CareersComponent');
console.log('Rendering CareersComponent');
console.log('Returning from CareersComponent');
console.log('Returning from CareersComponent');
console.log('Returning from CareersComponent');
    return (
        <div className={styles.careersContainer}>
            <h1 className={styles.title}>Careers</h1>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>Join Our Team</h2>
                <p className={styles.text}>
                    At Subjective Technologies, we are always looking for talented and passionate individuals to join our team.
                    Explore our open positions and find out how you can become a part of our innovative company.
                </p>
                <div className={styles.imagePlaceholder}>
                    <p>Join Our Team Image</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Open Positions</h2>
                <p className={styles.text}>
                    We offer a variety of positions across different departments. Whether you are a developer, designer, or marketing expert,
                    we have a place for you. Check out our current job openings below.
                </p>
                <div className={styles.jobList}>
                    <div className={styles.jobItem}>
                        <h3 className={styles.jobTitle}>Software Developer</h3>
                        <p className={styles.jobDescription}>Work on cutting-edge technology projects in a collaborative environment.</p>
                    </div>
                    <div className={styles.jobItem}>
                        <h3 className={styles.jobTitle}>UI/UX Designer</h3>
                        <p className={styles.jobDescription}>Create intuitive and beautiful user interfaces for our products.</p>
                    </div>
                    <div className={styles.jobItem}>
                        <h3 className={styles.jobTitle}>Marketing Specialist</h3>
                        <p className={styles.jobDescription}>Develop and execute marketing strategies to promote our products.</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Why Work With Us?</h2>
                <p className={styles.text}>
                    We believe in fostering a positive and inclusive work environment. Our employees enjoy competitive salaries, comprehensive
                    benefits, and opportunities for professional growth and development.
                </p>
                <div className={styles.imagePlaceholder}>
                    <p>Why Work With Us Image</p>
                </div>
            </section>
        </div>
    );
};

export default CareersComponent;