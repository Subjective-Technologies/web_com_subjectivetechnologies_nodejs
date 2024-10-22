import { getText } from '../utils/getText.js';
import React from 'react';
import styles from '../public/styles/ConsultingComponent.module.css';
const ConsultingComponent = () => {
  return <div className={styles.landingPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.sectionTitle}>{getText('ConsultingComponent.js_21_V29ya1')}</h1>
          <p className={styles.heroSubtitle}>{getText('ConsultingComponent.js_39_VGhlIE')}<br />{getText('ConsultingComponent.js_37_U29sdX')}<br/></p>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>{getText('ConsultingComponent.js_30_RGF0YS')}</h2>
        <div className={styles.sectionText}>
            <p>{getText('ConsultingComponent.js_529_QXQgQn')}</p><br />
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>{getText('ConsultingComponent.js_35_MS4gRG')}</h3>
            <p className={styles.text}>{getText('ConsultingComponent.js_3_T3Vy')}<strong>{getText('ConsultingComponent.js_24_V29ya0')}</strong>{getText('ConsultingComponent.js_158_Y2FwdH')}</p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>{getText('ConsultingComponent.js_33_Mi4gRm')}</h3>
            <p className={styles.text}>{getText('ConsultingComponent.js_160_V2hldG')}</p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>{getText('ConsultingComponent.js_42_My4gU3')}</h3>
            <p className={styles.text}>{getText('ConsultingComponent.js_169_T3VyIH')}</p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>{getText('ConsultingComponent.js_37_NC4gUm')}</h3>
            <p className={styles.text}>{getText('ConsultingComponent.js_17_RXZlcn')}<strong>{getText('ConsultingComponent.js_13_V29ya0')}</strong>{getText('ConsultingComponent.js_124_cHJvdm')}</p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>{getText('ConsultingComponent.js_34_NS4gQ2')}</h3>
            <p className={styles.text}>{getText('ConsultingComponent.js_4_RnJvbQ')}<strong>{getText('ConsultingComponent.js_27_Q3VzdG')}</strong>{getText('ConsultingComponent.js_2_dG8=')}<strong>{getText('ConsultingComponent.js_12_QUkgc2')}</strong>{getText('ConsultingComponent.js_3_YW5k')}<strong>{getText('ConsultingComponent.js_19_YnVzaW')}</strong>{getText('ConsultingComponent.js_90_LCAKIC')}</p>
          </div>

          <div className={styles.featureItem}>
            <h3 className={styles.subheading}>{getText('ConsultingComponent.js_24_Ni4gQ2')}</h3>
            <p className={styles.text}>{getText('ConsultingComponent.js_19_V2UgYX')}<strong>{getText('ConsultingComponent.js_24_cmVzZW')}</strong>{getText('ConsultingComponent.js_107_LCBwcm')}</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>{getText('ConsultingComponent.js_15_UGFydG')}</h2>
          <p className={styles.text}>{getText('ConsultingComponent.js_198_Q29udG')}</p>
          <a href={getText("ConsultingComponent.js_8_I2Nvbn")} className={styles.ctaButton}>{getText('ConsultingComponent.js_10_Q29udG')}</a>
        </div>
      </div>
    </div>;
};
export default ConsultingComponent;