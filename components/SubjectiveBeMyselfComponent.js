import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveBeMyselfComponent.js');
// src/components/SubjectiveBeMyselfComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveBeMyselfComponent.module.css';
const SubjectiveBeMyselfComponent = () => {
  console.log('Rendering SubjectiveBeMyselfComponent');
  console.log('Rendering SubjectiveBeMyselfComponent');
  console.log('Rendering SubjectiveBeMyselfComponent');
  console.log('Returning from SubjectiveBeMyselfComponent');
  console.log('Returning from SubjectiveBeMyselfComponent');
  console.log('Returning from SubjectiveBeMyselfComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveBeMyselfComponent.js_31_aW1hZ2")} alt={getText("SubjectiveBeMyselfComponent.js_19_U3Viam")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveBeMyselfComponent.js_95_RGlzY2')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveBeMyselfComponent.js_23_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveBeMyselfComponent.js_23_QUkgTG')}</p>
            <p className={styles.content}>{getText('SubjectiveBeMyselfComponent.js_172_R1TCri')}</p>
        </div>;
};
export default SubjectiveBeMyselfComponent;