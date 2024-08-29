// src/components/DownloadComponent/DownloadComponent.js

import React from 'react';
import styles from '../public/styles/DownloadComponent.module.css';

const DownloadComponent = () => {
  return (
    <div className={styles.downloadSection}>
      <div id="three_twins" align="center"><img src="images/three_twins_laptops.png"/></div>
      <h2>Download WorkTwins Client Application</h2>
      <p>Select your operating system below to download the WorkTwins client:</p>
      <div className={styles.downloadOptions}>
        <a href="/downloads/worktwins_windows.exe" className={`${styles.downloadLink} ${styles.windows}`}>
          <img src="/images/windows_icon.svg" alt="Windows Icon" />
          Download for Windows
        </a>
        <a href="/downloads/worktwins_macos.dmg" className={`${styles.downloadLink} ${styles.macos}`}>
          <img src="/images/macos_icon.svg" alt="MacOS Icon" />
          Download for MacOS
        </a>
        <a href="/downloads/worktwins_linux.deb" className={`${styles.downloadLink} ${styles.linux}`}>
          <img src="/images/linux_icon.svg" alt="Linux Icon" />
          Download for Linux
        </a>
      </div>
    </div>
  );
};

export default DownloadComponent;
