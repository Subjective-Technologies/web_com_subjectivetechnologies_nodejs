import { getText } from '../utils/getText.js';
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
  return <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{getText('ScientificResearchComponent.js_19_U2NpZW')}</h1>
        <p className={styles.description}>{getText('ScientificResearchComponent.js_69_RXhwbG')}</p>

        <div className={styles.papersContainer}>
          <div className={styles.paperFrame}>
            <iframe className={styles.iframe} src={getText("ScientificResearchComponent.js_33_aHR0cH")}></iframe>
            <p className={styles.paperNote}>{getText('ScientificResearchComponent.js_37_UGFwZX')}</p>
          </div>
          <div className={styles.paperFrame}>
            <iframe className={styles.iframe} src={getText("ScientificResearchComponent.js_33_aHR0cH")}></iframe>
            <p className={styles.paperNote}>{getText('ScientificResearchComponent.js_37_UGFwZX')}</p>
          </div>
        </div>

        <p className={styles.note}>{getText('ScientificResearchComponent.js_31_Rm9yIG')}{' '}
          <a href={getText("ScientificResearchComponent.js_23_aHR0cH")} className={styles.link}>{getText('ScientificResearchComponent.js_13_cmVzZW')}</a>{getText('ScientificResearchComponent.js_1_Lg==')}</p>

        <div className={styles.logoTable}>
          <div className={styles.logoCell}>
            <img src={getText("ScientificResearchComponent.js_31_aHR0cH")} className={styles.logo} alt={getText("ScientificResearchComponent.js_6_TG9nby")} />
          </div>
          <div className={styles.logoCell}>
            <img src={getText("ScientificResearchComponent.js_31_aHR0cH")} className={styles.logo} alt={getText("ScientificResearchComponent.js_6_TG9nby")} />
          </div>
        </div>

        <div className={styles.orcidSection}>
          <div className={styles.orcidRow}>
            <img src={getText("ScientificResearchComponent.js_31_aHR0cH")} className={styles.orcidLogo} alt={getText("ScientificResearchComponent.js_10_T1JDSU")} />
            <p className={styles.orcidCode}>{getText('ScientificResearchComponent.js_19_MDAwMC')}</p>
          </div>
        </div>

        <div className={styles.bookSection}>
          <h2 className={styles.bookTitle}>{getText('ScientificResearchComponent.js_10_Qm9vay')}</h2>
          <p className={styles.bookSubtitle}>{getText('ScientificResearchComponent.js_20_U3VidG')}</p>
          <img src={getText("ScientificResearchComponent.js_35_aHR0cH")} className={styles.bookCover} alt={getText("ScientificResearchComponent.js_10_Qm9vay")} />
          <p className={styles.bookNote}>{getText('ScientificResearchComponent.js_19_Tm90ZS')}</p>
          <p className={styles.bookPitch}>{getText('ScientificResearchComponent.js_20_UGl0Y2')}</p>
          <a href={getText("ScientificResearchComponent.js_22_aHR0cH")} className={styles.amazonButton}>{getText('ScientificResearchComponent.js_13_QnV5IG')}</a>
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>;
};
export default ScientificResearchComponent;