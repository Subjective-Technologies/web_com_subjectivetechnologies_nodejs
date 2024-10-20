import { getText } from '../utils/getText.js';
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
  return <div className={styles.careersContainer}>
            <h1 className={styles.title}>{getText('CareersComponent.js_7_Q2FyZW')}</h1>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>{getText('CareersComponent.js_13_Sm9pbi')}</h2>
                <p className={styles.text}>{getText('CareersComponent.js_220_QXQgU3')}</p>
                <div className={styles.imagePlaceholder}>
                    <p>{getText('CareersComponent.js_19_Sm9pbi')}</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>{getText('CareersComponent.js_14_T3Blbi')}</h2>
                <p className={styles.text}>{getText('CareersComponent.js_208_V2Ugb2')}</p>
                <div className={styles.jobList}>
                    <div className={styles.jobItem}>
                        <h3 className={styles.jobTitle}>{getText('CareersComponent.js_18_U29mdH')}</h3>
                        <p className={styles.jobDescription}>{getText('CareersComponent.js_72_V29yay')}</p>
                    </div>
                    <div className={styles.jobItem}>
                        <h3 className={styles.jobTitle}>{getText('CareersComponent.js_14_VUkvVV')}</h3>
                        <p className={styles.jobDescription}>{getText('CareersComponent.js_64_Q3JlYX')}</p>
                    </div>
                    <div className={styles.jobItem}>
                        <h3 className={styles.jobTitle}>{getText('CareersComponent.js_20_TWFya2')}</h3>
                        <p className={styles.jobDescription}>{getText('CareersComponent.js_65_RGV2ZW')}</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>{getText('CareersComponent.js_17_V2h5IF')}</h2>
                <p className={styles.text}>{getText('CareersComponent.js_211_V2UgYm')}</p>
                <div className={styles.imagePlaceholder}>
                    <p>{getText('CareersComponent.js_22_V2h5IF')}</p>
                </div>
            </section>
        </div>;
};
export default CareersComponent;