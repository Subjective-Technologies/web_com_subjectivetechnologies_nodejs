import { getText } from '../utils/getText.js';
console.log('Loading ImpactComponent.js');
import React from 'react';
import TechnologyImpact from './TechnologyImpact';
import Footer from './Footer'; // Import the Footer component
import styles from '../public/styles/ImpactComponent.module.css';
const postScarcity = [{
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_25_U3Viam"),
  description: getText("ImpactComponent.js_439_VGhpcy")
}, {
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_22_U3Viam"),
  description: getText("ImpactComponent.js_329_VW5saW")
}, {
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_19_U3Viam"),
  description: getText("ImpactComponent.js_296_VGhpcy")
}];
const postEducation = [{
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_21_U3Viam"),
  description: getText("ImpactComponent.js_321_VGhpcy")
}, {
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_25_U3Viam"),
  description: getText("ImpactComponent.js_301_QnkgYW")
}];
const postLabour = [{
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_18_U3Viam"),
  description: getText("ImpactComponent.js_287_VGhpcy")
}, {
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_19_U3Viam"),
  description: getText("ImpactComponent.js_293_QnkgY3")
}, {
  image: getText("ImpactComponent.js_35_aHR0cH"),
  title: getText("ImpactComponent.js_17_Q29nbm"),
  description: getText("ImpactComponent.js_227_VGhpcy")
}];
const ImpactComponent = () => {
  console.log('Rendering ImpactComponent');
  console.log('Rendering ImpactComponent');
  console.log('Rendering ImpactComponent');
  console.log('Returning from ImpactComponent');
  console.log('Returning from ImpactComponent');
  console.log('Returning from ImpactComponent');
  return <div className={styles.impactContainer}>
      <div className={styles.content}>
        <section className={styles.videoSection}>
          <video controls className={styles.video}>
            <source src={getText("ImpactComponent.js_53_dmlkZW")} type={getText("ImpactComponent.js_9_dmlkZW")} />{getText('ImpactComponent.js_44_WW91ci')}</video>
        </section>

        <section className={styles.introSection}>
          <h2 className={styles.introTitle}>{getText('ImpactComponent.js_44_SW1wYW')}</h2>
          <p className={styles.introText}>{getText('ImpactComponent.js_438_VGhlIG')}</p>
          <p className={styles.introText}>
            <strong>{getText('ImpactComponent.js_14_UG9zdC')}</strong>{getText('ImpactComponent.js_540_VGhlIG')}</p>
          <p className={styles.introText}>
            <strong>{getText('ImpactComponent.js_15_UG9zdC')}</strong>{getText('ImpactComponent.js_574_VHJhZG')}</p>
          <p className={styles.introText}>
            <strong>{getText('ImpactComponent.js_12_UG9zdC')}</strong>{getText('ImpactComponent.js_561_VGhlIG')}</p>
        </section>

        <section className={styles.eraSection}>
          <h3 className={styles.eraTitle}>{getText('ImpactComponent.js_17_UG9zdC')}</h3>
          {postScarcity.map((tech, index) => <TechnologyImpact key={index} image={tech.image} title={tech.title} description={tech.description} reverse={index % 2 === 1} />)}
        </section>

        <section className={styles.eraSection}>
          <h3 className={styles.eraTitle}>{getText('ImpactComponent.js_18_UG9zdC')}</h3>
          {postEducation.map((tech, index) => <TechnologyImpact key={index} image={tech.image} title={tech.title} description={tech.description} reverse={index % 2 === 1} />)}
        </section>

        <section className={styles.eraSection}>
          <h3 className={styles.eraTitle}>{getText('ImpactComponent.js_15_UG9zdC')}</h3>
          {postLabour.map((tech, index) => <TechnologyImpact key={index} image={tech.image} title={tech.title} description={tech.description} reverse={index % 2 === 1} />)}
        </section>

        <section className={styles.impactQuoteSection}>
          <blockquote className={styles.impactQuote}>{getText('ImpactComponent.js_149_IlRoZS')}</blockquote>
        </section>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>;
};
export default ImpactComponent;