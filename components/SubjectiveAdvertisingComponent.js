import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveAdvertisingComponent.js');
// src/components/SubjectiveAdvertisingComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveAdvertisingComponent.module.css'; // Make sure the CSS path is correct

const SubjectiveAdvertisingComponent = () => {
  console.log('Rendering SubjectiveAdvertisingComponent');
  console.log('Rendering SubjectiveAdvertisingComponent');
  console.log('Rendering SubjectiveAdvertisingComponent');
  console.log('Returning from SubjectiveAdvertisingComponent');
  console.log('Returning from SubjectiveAdvertisingComponent');
  console.log('Returning from SubjectiveAdvertisingComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveAdvertisingComponent.js_33_aW1hZ2")} alt={getText("SubjectiveAdvertisingComponent.js_22_U3Viam")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveAdvertisingComponent.js_80_RXhwbG')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveAdvertisingComponent.js_26_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveAdvertisingComponent.js_25_TWFya2')}</p>
            <p className={styles.content}>{getText('SubjectiveAdvertisingComponent.js_204_R1TCri')}</p>
        </div>;
};
export default SubjectiveAdvertisingComponent;