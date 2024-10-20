import { getText } from '../utils/getText.js';
console.log('Loading ContactComponent.js');
import React from 'react';
import styles from '../public/styles/ContactComponent.module.css';
const ContactComponent = () => {
  console.log('Rendering ContactComponent');
  console.log('Returning from ContactComponent');
  return <div className={styles.contactContainer}>
            <h1 className={styles.title}>{getText('ContactComponent.js_10_Q29udG')}</h1>

            <div className={styles.gridContainer}>
                <div>
                    <h2 className={styles.subheading}>{getText('ContactComponent.js_27_R2VuZX')}</h2>
                    <p className={styles.text}>{getText('ContactComponent.js_25_RW1haW')}</p>
                    <p className={styles.text}>{getText('ContactComponent.js_19_UGhvbm')}</p>
                    <div className={styles.pressContact}>
                    <img src={getText("ContactComponent.js_33_L2ltYW")} alt={getText("ContactComponent.js_9_VG9tbX")} className={styles.pressImage} />
                    <div className={styles.pressDetails}>
                    <h2 className={styles.subheading}>{getText('ContactComponent.js_13_UHJlc3')}</h2>
                        <p className={styles.text}>{getText('ContactComponent.js_15_TmFtZT')}</p>
                        <p className={styles.text}>{getText('ContactComponent.js_42_RW1haW')}</p>
                        <p className={styles.text}>{getText('ContactComponent.js_9_V2hhdH')}<a href={getText("ContactComponent.js_24_aHR0cH")} target={getText("ContactComponent.js_6_X2JsYW")} rel={getText("ContactComponent.js_19_bm9vcG")} className={styles.whatsappLink}>{getText('ContactComponent.js_12_KzE3OD')}</a></p>
                    </div>
                </div>
                </div>

                <div className={styles.videoPlaceholder}>
                    <video className={styles.video} src={getText("ContactComponent.js_22_dmlkZW")} autoPlay muted loop />
                </div>



                <div className={styles.formSection}>
                <h2 className={styles.subheading}>{getText('ContactComponent.js_12_R2V0IG')}</h2>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("ContactComponent.js_4_bmFtZQ")} className={styles.label}>{getText('ContactComponent.js_4_TmFtZQ')}</label>
                        <input type={getText("ContactComponent.js_4_dGV4dA")} id={getText("ContactComponent.js_4_bmFtZQ")} name={getText("ContactComponent.js_4_bmFtZQ")} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("ContactComponent.js_5_ZW1haW")} className={styles.label}>{getText('ContactComponent.js_5_RW1haW')}</label>
                        <input type={getText("ContactComponent.js_5_ZW1haW")} id={getText("ContactComponent.js_5_ZW1haW")} name={getText("ContactComponent.js_5_ZW1haW")} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("ContactComponent.js_5_cGhvbm")} className={styles.label}>{getText('ContactComponent.js_5_UGhvbm')}</label>
                        <input type={getText("ContactComponent.js_3_dGVs")} id={getText("ContactComponent.js_5_cGhvbm")} name={getText("ContactComponent.js_5_cGhvbm")} className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("ContactComponent.js_7_bWVzc2")} className={styles.label}>{getText('ContactComponent.js_7_TWVzc2')}</label>
                        <textarea id={getText("ContactComponent.js_7_bWVzc2")} name={getText("ContactComponent.js_7_bWVzc2")} className={styles.textarea} required></textarea>
                    </div>
                    <button type={getText("ContactComponent.js_6_c3VibW")} className={styles.submitButton}>{getText('ContactComponent.js_6_U3VibW')}</button><br />
                </form>

                {/**/}
            </div>
            <div className={styles.bookImageContainer}>
                    <a href={getText("ContactComponent.js_94_aHR0cH")}>
                        <img src={getText("ContactComponent.js_80_L2ltYW")} alt={getText("ContactComponent.js_10_Qm9vay")} className={styles.bookImage} />
                    </a>
              </div> 

            </div>
        </div>;
};
export default ContactComponent;