import React from 'react';
import styles from '../public/styles/ConsultingComponent.module.css';

const ConsultingComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.sectionTitle}>Why Choose <br/>WorkTwins Consulting?</h1>
          <p className={styles.heroSubtitle}>
        The First Subjective 0-Input Technology<br/> Solution For Work Candidate Selection          </p>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Data-Driven Staff Augmentation</h2>
        <div className={styles.sectionText}>
            <p>
                At BrainBoost Consulting, we revolutionize the hiring and consultancy process by offering a data-driven, unbiased, and inclusive approach that ensures you get the best possible match for your technical needs. Our WorkFootPrint technology eliminates subjectivity and focuses entirely on real developer experience, making it impossible for candidates to exaggerate their abilities. With us, you get top-tier talent, innovative solutions, and the efficiency your business needs to stay ahead in today’s fast-paced digital landscape.
            </p><br/>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>1. Data-Driven, Bias-Free Selection</h3>
            <p className={styles.text}>
              Our <strong>WorkFootPrint technology</strong> captures real developer performance data, removing biases from 
              the hiring process. No more guesswork—just a perfect match based on real skills.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>2. Flexible Contractor Engagement</h3>
            <p className={styles.text}>
              Whether you need short-term contractors or long-term hires, we offer flexible models. We ensure the best 
              talent, backed by data-driven decisions.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>3. Strategic Location & Cultural Alignment</h3>
            <p className={styles.text}>
              Our presence in Argentina ensures real-time collaboration with US clients, along with a shared culture that 
              makes working with us seamless and productive.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>4. Real Performance, Not Just Resumes</h3>
            <p className={styles.text}>
              Every developer's <strong>WorkFootPrint</strong> provides real-world evidence of their expertise, removing 
              the need for interviews and subjective assessments.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>5. Comprehensive Service Portfolio</h3>
            <p className={styles.text}>
              From <strong>Custom Software Development</strong> to <strong>AI solutions</strong> and <strong>business consulting</strong>, 
              we offer end-to-end solutions that address every aspect of your business.
            </p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>6. Continuous Innovation</h3>
            <p className={styles.text}>
              We are committed to <strong>research and development</strong>, providing cutting-edge solutions that ensure your 
              business stays ahead of the competition.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>Partner with Us</h2>
          <p className={styles.text}>
            Contact BrainBoost Consulting today to explore how we can help your business thrive with our unique blend of data-driven,
            bias-free talent selection and cutting-edge consulting services.
          </p>
          <a href="#contact" className={styles.ctaButton}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default ConsultingComponent;
