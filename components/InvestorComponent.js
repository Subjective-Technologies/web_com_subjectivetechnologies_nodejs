import React from 'react';
import styles from '../styles/InvestorComponent.module.css';

const InvestorComponent = () => {
  return (
    <div className={styles.investorContainer}>
      <h1 className={styles.title}>Investment Opportunities with Subjective Technologies</h1>
      
      <section className={styles.pitchSection}>
        <h2 className={styles.subheading}>Our Investment Pitch</h2>
        <p className={styles.text}>
          Subjective Technologies is at the forefront of innovation in the fields of Human-Computer Interaction and Swarm Intelligence. 
          We are pioneering technologies that promise to transform industries and redefine human-machine collaboration. 
          Join us on this exciting journey as we bring our groundbreaking ideas to life.
        </p>
        <div className={styles.imagePlaceholder}>
          <p>Investment Pitch Image</p>
        </div>
      </section>
      
      <section className={styles.patentSection}>
        <h2 className={styles.subheading}>Software Patent Information</h2>
        <table className={styles.patentTable}>
          <thead>
            <tr>
              <th>Patent Name</th>
              <th>Status</th>
              <th>Date Filed</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Patent 1</td>
              <td>Approved</td>
              <td>2021-01-01</td>
              <td><a href="path/to/patent1.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>View PDF</a></td>
            </tr>
            <tr>
              <td>Patent 2</td>
              <td>Pending</td>
              <td>2022-05-15</td>
              <td><a href="path/to/patent2.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>View PDF</a></td>
            </tr>
          </tbody>
        </table>
        <div className={styles.imagePlaceholder}>
          <p>Patent Document Image</p>
        </div>
      </section>
    </div>
  );
};

export default InvestorComponent;
