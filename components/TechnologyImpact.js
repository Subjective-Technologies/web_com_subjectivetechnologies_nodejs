console.log('Loading TechnologyImpact.js');
import React from 'react';
import styles from '../public/styles/ImpactComponent.module.css';

const TechnologyImpact = ({ image, title, description, reverse }) => {
  return (
    <section className={`${styles.impactSection} ${reverse ? styles.reverse : ''}`}>
      <img src={image} alt={title} className={styles.impactImage} />
      <div className={styles.impactText}>
        <h2 className={styles.impactHeading}>{title}</h2>
        <p className={styles.impactDescription}>{description}</p>
      </div>
    </section>
  );
};

export default TechnologyImpact;
