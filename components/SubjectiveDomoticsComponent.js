import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveDomoticsComponent.js');
// src/components/SubjectiveDomoticsComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveDomoticsComponent.module.css';
const SubjectiveDomoticsComponent = () => {
  console.log('Rendering SubjectiveDomoticsComponent');
  console.log('Returning from SubjectiveDomoticsComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveDomoticsComponent.js_30_aW1hZ2")} alt={getText("SubjectiveDomoticsComponent.js_19_U3Viam")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveDomoticsComponent.js_70_RXhwZX')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveDomoticsComponent.js_23_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveDomoticsComponent.js_34_RXh0ZW')}</p>
            <p className={styles.content}>{getText('SubjectiveDomoticsComponent.js_206_R1TCri')}</p>
        </div>;
};
export default SubjectiveDomoticsComponent;