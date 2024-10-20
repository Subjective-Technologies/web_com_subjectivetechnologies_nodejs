import { getText } from '../utils/getText.js';
// components/Menu.js

import React, { useState } from 'react';
import styles from '../public/styles/Menu.module.css';
const Menu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const handleMouseEnter = () => {
    if (delayHandler) clearTimeout(delayHandler);
    setShowSubMenu(true);
  };
  const handleMouseLeave = () => {
    const handler = setTimeout(() => {
      setShowSubMenu(false);
    }, 200); // Adjust the delay as needed (200ms in this case)
    setDelayHandler(handler);
  };
  return <div className={styles.menu}>
            <div className={`${styles.menuItem} ${styles.link}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div id={getText("Menu.js_4_bG9nbw")}>
                    <a href={getText("Menu.js_1_Lw==")}>
                        <img src={getText("Menu.js_29_Li4vaW")} alt={getText("Menu.js_4_TG9nbw")} />
                    </a>
                </div>
            </div>
            <div className={styles.itemContainer}>
                <a href={getText("Menu.js_10_LyNkb3")}>
                    <div className={styles.menuItem}>{getText('Menu.js_8_RG93bm')}</div>
                </a>
                <a href={getText("Menu.js_13_Li4vY2")}>
                    <div className={styles.menuItem}>{getText('Menu.js_10_Q29uc3')}</div>
                </a>
                <a href={getText("Menu.js_11_Li4vaW")}>
                    <div className={styles.menuItem}>{getText('Menu.js_9_SW52ZX')}</div>
                </a>
                <a href={getText("Menu.js_10_Li4vcH")}>
                    <div className={styles.menuItem}>{getText('Menu.js_7_UHJpY2')}</div>
                </a>
                <a href={getText("Menu.js_9_LyNjb2")}>
                    <div className={styles.menuItem}>{getText('Menu.js_7_Q29udG')}</div>
                </a>
            </div>
            <a className={styles.signUpYellowButton} href={getText("Menu.js_10_Li4vc2")}>
                <button className={styles.signUpButton}>{getText('Menu.js_7_U2lnbi')}</button>
            </a>
        </div>;
};
export default Menu;