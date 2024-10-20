import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveForMateComponent.js');
// src/components/SubjectiveForMateComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveForMateComponent.module.css';
const SubjectiveForMateComponent = () => {
  console.log('Rendering SubjectiveForMateComponent');
  console.log('Rendering SubjectiveForMateComponent');
  console.log('Rendering SubjectiveForMateComponent');
  console.log('Returning from SubjectiveForMateComponent');
  console.log('Returning from SubjectiveForMateComponent');
  console.log('Returning from SubjectiveForMateComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveForMateComponent.js_29_aW1hZ2")} alt={getText("SubjectiveForMateComponent.js_18_U3Viam")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveForMateComponent.js_87_U3RyZW')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveForMateComponent.js_22_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveForMateComponent.js_13_Tm8gTW')}</p>
            <p className={styles.content}>{getText('SubjectiveForMateComponent.js_185_R1TCri')}</p>
        </div>;
};
export default SubjectiveForMateComponent;