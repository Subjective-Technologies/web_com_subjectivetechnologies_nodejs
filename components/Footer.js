import { getText } from '../utils/getText.js';
console.log('Loading Footer.js');
// components/Footer.js
import React from 'react';
import styles from '../public/styles/Footer.module.css';
const Footer = () => {
  console.log('Rendering Footer');
  console.log('Rendering Footer');
  console.log('Rendering Footer');
  console.log('Returning from Footer');
  console.log('Returning from Footer');
  console.log('Returning from Footer');
  return <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h4>{getText('Footer.js_8_UHJvZH')}</h4>
                    <ul>
                    <ul>
                        <li><a href={getText("Footer.js_21_c3Viam")}>{getText('Footer.js_25_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_28_c3Viam")}>{getText('Footer.js_32_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_19_c3Viam")}>{getText('Footer.js_23_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_22_c3Viam")}>{getText('Footer.js_26_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_29_c3Viam")}>{getText('Footer.js_33_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_18_c3Viam")}>{getText('Footer.js_22_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_26_c3Viam")}>{getText('Footer.js_30_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_18_c3Viam")}>{getText('Footer.js_22_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_19_c3Viam")}>{getText('Footer.js_23_R1TCri')}</a></li>
                        <li><a href={getText("Footer.js_20_c3Viam")}>{getText('Footer.js_24_R1TCri')}</a></li>
                    </ul>

                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>{getText('Footer.js_5_QWJvdX')}</h4>
                    <ul>
                        <li><a href={getText("Footer.js_6_aW1wYW")}>{getText('Footer.js_6_SW1wYW')}</a></li>
                        <li><a href={getText("Footer.js_12_aG93X2")}>{getText('Footer.js_12_SG93IE')}</a></li>
                        <li><a href={getText("Footer.js_19_c2NpZW")}>{getText('Footer.js_19_U2NpZW')}</a></li>
                        <li><a href={getText("Footer.js_7_Y2FyZW")}>{getText('Footer.js_7_Q2FyZW')}</a></li>
                        <li><a href={getText("Footer.js_8_aW52ZX")}>{getText('Footer.js_9_SW52ZX')}</a></li>
                        <li><a href={getText("Footer.js_7_Y29udG")}>{getText('Footer.js_7_Q29udG')}</a></li>
                        <li><a href={getText("Footer.js_10_Y29uc3")}>{getText('Footer.js_10_Q29uc3')}</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>{getText('Footer.js_9_Rm9sbG')}</h4>
                    <ul>
                        <li><a href={getText("Footer.js_24_aHR0cH")}>{getText('Footer.js_8_RmFjZW')}</a></li>
                        <li><a href={getText("Footer.js_23_aHR0cH")}>{getText('Footer.js_1_WA==')}</a></li>
                        <li><a href={getText("Footer.js_24_aHR0cH")}>{getText('Footer.js_8_TGlua2')}</a></li>
                        <li><a href={getText("Footer.js_25_aHR0cH")}>{getText('Footer.js_9_SW5zdG')}</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>{getText('Footer.js_30_wqkgMj')}</p>
                <p>{getText('Footer.js_276_Q29weX')}</p>
            </div>
        </footer>;
};
export default Footer;