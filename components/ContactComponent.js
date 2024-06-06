import React from 'react';
import styles from '../styles/ContactComponent.module.css';

const ContactComponent = () => {
    return (
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        
        <div className={styles.contactInfo}>
          <h2 className={styles.subheading}>General Contact Information</h2>
          <p className={styles.text}>Email: info@company.com</p>
          <p className={styles.text}>Phone: +123-456-7890</p>
          <p className={styles.text}>WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>+123-456-7890</a></p>
          <p className={styles.text}>Address: 123 Main Street, City, Country</p>
        </div>
        
        <div className={styles.pressSection}>
          <h2 className={styles.subheading}>Press Contacts</h2>
          <div className={styles.pressContact}>
            <img src="images/person1.jpg" alt="Person 1" className={styles.pressImage} />
            <div className={styles.pressDetails}>
              <p className={styles.text}>Name: John Doe</p>
              <p className={styles.text}>Email: john.doe@company.com</p>
              <p className={styles.text}>Phone: +123-456-7891</p>
            </div>
          </div>
          <div className={styles.pressContact}>
            <img src="images/person2.jpg" alt="Person 2" className={styles.pressImage} />
            <div className={styles.pressDetails}>
              <p className={styles.text}>Name: Jane Smith</p>
              <p className={styles.text}>Email: jane.smith@company.com</p>
              <p className={styles.text}>Phone: +123-456-7892</p>
            </div>
          </div>
          <div className={styles.pressContact}>
            <div className={styles.placeholder}>
              <p>Picture</p>
            </div>
            <div className={styles.pressDetails}>
              <p className={styles.text}>Name: Press Contact</p>
              <p className={styles.text}>Email: press.contact@company.com</p>
              <p className={styles.text}>Phone: +123-456-7893</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactComponent;