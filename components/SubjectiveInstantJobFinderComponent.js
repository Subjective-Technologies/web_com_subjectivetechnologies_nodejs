import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveInstantJobFinderComponent.js');
// src/components/SubjectiveInstantJobFinderComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveInstantJobFinderComponent.module.css';
const SubjectiveInstantJobFinderComponent = () => {
  console.log('Rendering SubjectiveInstantJobFinderComponent');
  console.log('Returning from SubjectiveInstantJobFinderComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveInstantJobFinderComponent.js_40_aW1hZ2")} alt={getText("SubjectiveInstantJobFinderComponent.js_18_SW5zdG")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveInstantJobFinderComponent.js_64_Q29ubm')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveInstantJobFinderComponent.js_33_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveInstantJobFinderComponent.js_13_SnVzdC')}</p>
            <p className={styles.content}>{getText('SubjectiveInstantJobFinderComponent.js_196_VGhlIE')}</p>
        </div>;
};
export default SubjectiveInstantJobFinderComponent;