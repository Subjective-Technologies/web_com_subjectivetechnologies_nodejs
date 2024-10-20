import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveAdapterComponent.js');
// src/components/SubjectiveAdapterComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveAdapterComponent.module.css';
const SubjectiveAdapterComponent = () => {
  console.log('Rendering SubjectiveAdapterComponent');
  console.log('Returning from SubjectiveAdapterComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveAdapterComponent.js_29_aW1hZ2")} alt={getText("SubjectiveAdapterComponent.js_18_U3Viam")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveAdapterComponent.js_82_U2VhbW')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveAdapterComponent.js_22_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveAdapterComponent.js_43_TWlncm')}</p>
            <p className={styles.content}>{getText('SubjectiveAdapterComponent.js_202_R1TCri')}</p>
        </div>;
};
export default SubjectiveAdapterComponent;