console.log('Loading ScientificResearchComponent.js');
import React from 'react';
import Footer from './Footer'; // Import the Footer component
import styles from '../public/styles/ScientificResearchComponent.module.css';

const ScientificResearchComponent = () => {
console.log('Rendering ScientificResearchComponent');
console.log('Rendering ScientificResearchComponent');
console.log('Rendering ScientificResearchComponent');
console.log('Returning from ScientificResearchComponent');
console.log('Returning from ScientificResearchComponent');
console.log('Returning from ScientificResearchComponent');
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Scientific Research</h1>
        <p className={styles.description}>
          Explore our extensive collection of research papers and publications.
        </p>

        <div className={styles.papersContainer}>
          <div className={styles.paperFrame}>
            <iframe className={styles.iframe} src="https://www.example.com/research1"></iframe>
            <p className={styles.paperNote}>Paper 1: Title and brief description.</p>
          </div>
          <div className={styles.paperFrame}>
            <iframe className={styles.iframe} src="https://www.example.com/research2"></iframe>
            <p className={styles.paperNote}>Paper 2: Title and brief description.</p>
          </div>
        </div>

        <p className={styles.note}>
          For more information, visit our{' '}
          <a href="https://www.example.com" className={styles.link}>
            research page
          </a>
          .
        </p>

        <div className={styles.logoTable}>
          <div className={styles.logoCell}>
            <img src="https://via.placeholder.com/150" className={styles.logo} alt="Logo 1" />
          </div>
          <div className={styles.logoCell}>
            <img src="https://via.placeholder.com/150" className={styles.logo} alt="Logo 2" />
          </div>
        </div>

        <div className={styles.orcidSection}>
          <div className={styles.orcidRow}>
            <img src="https://via.placeholder.com/100" className={styles.orcidLogo} alt="ORCID Logo" />
            <p className={styles.orcidCode}>0000-0001-2345-6789</p>
          </div>
        </div>

        <div className={styles.bookSection}>
          <h2 className={styles.bookTitle}>Book Title</h2>
          <p className={styles.bookSubtitle}>Subtitle of the book</p>
          <img src="https://via.placeholder.com/400x600" className={styles.bookCover} alt="Book Cover" />
          <p className={styles.bookNote}>Note about the book</p>
          <p className={styles.bookPitch}>Pitch about the book</p>
          <a href="https://www.amazon.com" className={styles.amazonButton}>
            Buy on Amazon
          </a>
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default ScientificResearchComponent;
