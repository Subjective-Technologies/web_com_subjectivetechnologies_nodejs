import { getText } from '../utils/getText.js';
console.log('Loading SubjectiveLogisticsComponent.js');
// src/components/SubjectiveLogisticsComponent.js
import React from 'react';
import styles from '../public/styles/SubjectiveLogisticsComponent.module.css';
const SubjectiveLogisticsComponent = () => {
  console.log('Rendering SubjectiveLogisticsComponent');
  console.log('Returning from SubjectiveLogisticsComponent');
  return <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={getText("SubjectiveLogisticsComponent.js_31_aW1hZ2")} alt={getText("SubjectiveLogisticsComponent.js_9_TG9naX")} className={styles.roundImage} />
                <p className={styles.imageText}>{getText('SubjectiveLogisticsComponent.js_66_Q29ubm')}</p>
            </div>
            <h1 className={styles.title}>{getText('SubjectiveLogisticsComponent.js_24_R1TCri')}</h1>
            <p className={styles.description}>{getText('SubjectiveLogisticsComponent.js_13_SnVzdC')}</p>
            <p className={styles.content}>{getText('SubjectiveLogisticsComponent.js_187_VGhlIE')}</p>
        </div>;
};
export default SubjectiveLogisticsComponent;