import { getText } from '../utils/getText.js';
// src/components/DownloadComponent/DownloadComponent.js

import React from 'react';
import styles from '../public/styles/DownloadComponent.module.css';
const DownloadComponent = () => {
  return <div className={styles.downloadSection}>
      <div id={getText("DownloadComponent.js_11_dGhyZW")} align={getText("DownloadComponent.js_6_Y2VudG")}><img src={getText("DownloadComponent.js_30_aW1hZ2")} /></div>
      <h2>{getText('DownloadComponent.js_37_RG93bm')}</h2>
      <p>{getText('DownloadComponent.js_68_U2VsZW')}</p>
      <div className={styles.downloadOptions}>
        <a href={getText("DownloadComponent.js_32_L2Rvd2")} className={`${styles.downloadLink} ${styles.windows}`}>
          <img src={getText("DownloadComponent.js_24_L2ltYW")} alt={getText("DownloadComponent.js_12_V2luZG")} />{getText('DownloadComponent.js_20_RG93bm')}</a>
        <a href={getText("DownloadComponent.js_30_L2Rvd2")} className={`${styles.downloadLink} ${styles.macos}`}>
          <img src={getText("DownloadComponent.js_22_L2ltYW")} alt={getText("DownloadComponent.js_10_TWFjT1")} />{getText('DownloadComponent.js_18_RG93bm')}</a>
        <a href={getText("DownloadComponent.js_30_L2Rvd2")} className={`${styles.downloadLink} ${styles.linux}`}>
          <img src={getText("DownloadComponent.js_22_L2ltYW")} alt={getText("DownloadComponent.js_10_TGludX")} />{getText('DownloadComponent.js_18_RG93bm')}</a>
      </div>
    </div>;
};
export default DownloadComponent;