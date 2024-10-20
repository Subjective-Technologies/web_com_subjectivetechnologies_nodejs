import { getText } from '../../utils/getText.js';
import React, { useState } from 'react';
import styles from '../../public/styles/DashboardMenuComponent.module.css';
const DashboardMenuComponent = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const [showUserSubMenu, setShowUserSubMenu] = useState(false);
  const [userDelayHandler, setUserDelayHandler] = useState(null);
  const handleMouseEnter = () => {
    if (delayHandler) clearTimeout(delayHandler);
    setShowSubMenu(true);
  };
  const handleMouseLeave = () => {
    const handler = setTimeout(() => {
      setShowSubMenu(false);
    }, 200); // Delay before hiding
    setDelayHandler(handler);
  };
  const handleUserMouseEnter = () => {
    if (userDelayHandler) clearTimeout(userDelayHandler);
    setShowUserSubMenu(true);
  };
  const handleUserMouseLeave = () => {
    const handler = setTimeout(() => {
      setShowUserSubMenu(false);
    }, 200); // Delay before hiding
    setUserDelayHandler(handler);
  };
  const menuItems = [{
    href: getText("DashboardMenuComponent.js_19_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_8_T3Zlcn")
  }, {
    href: getText("DashboardMenuComponent.js_16_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_5_U2FsZX")
  }, {
    href: getText("DashboardMenuComponent.js_20_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_9_Q3VzdG")
  }, {
    href: getText("DashboardMenuComponent.js_20_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_9_SW52ZW")
  }, {
    href: getText("DashboardMenuComponent.js_18_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_7_UmVwb3")
  }, {
    href: getText("DashboardMenuComponent.js_19_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_8_U2V0dG")
  }, {
    href: getText("DashboardMenuComponent.js_19_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_14_VGVzdG")
  }, {
    href: getText("DashboardMenuComponent.js_19_L2Rhc2"),
    label: getText("DashboardMenuComponent.js_14_VGVzdG")
  }, ...Array.from({
    length: 25
  }, (_, i) => ({
    href: `/dashboard/mock${i + 1}`,
    label: `Mock Item ${i + 1}`
  }))];
  const renderMenuItems = () => {
    return menuItems.map((item, index) => <a key={index} href={item.href} className={styles.subMenuItem}>
                {item.label}
            </a>);
  };
  return <div className={styles.menu}>
            <div className={`${styles.menuItem} ${styles.link}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href={getText("DashboardMenuComponent.js_1_Lw==")}>
                    <img src={getText("DashboardMenuComponent.js_53_L2ltYW")} alt={getText("DashboardMenuComponent.js_28_U3Viam")} className={styles.subjectiveIcon} />
                </a>
                <img src={getText("DashboardMenuComponent.js_42_L2ltYW")} alt={getText("DashboardMenuComponent.js_14_RGFzaG")} className={styles.dashboardIcon} />
                {showSubMenu && <div className={styles.subMenu}>
                        {renderMenuItems()}
                    </div>}
            </div>
            <div className={styles.userProfile} onMouseEnter={handleUserMouseEnter} onMouseLeave={handleUserMouseLeave}>
                <img src={getText("DashboardMenuComponent.js_33_L2ltYW")} alt={getText("DashboardMenuComponent.js_12_VXNlci")} className={styles.userProfileImage} />
                {showUserSubMenu && <div className={styles.userSubMenu}>
                        <a href={getText("DashboardMenuComponent.js_10_L2Rhc2")} className={styles.subMenuItem}>{getText('DashboardMenuComponent.js_9_RGFzaG')}</a>
                        <a href={getText("DashboardMenuComponent.js_21_L2Rhc2")} className={styles.subMenuItem}>{getText('DashboardMenuComponent.js_7_UHJvZm')}</a>
                        <a href={getText("DashboardMenuComponent.js_22_L2Rhc2")} className={styles.subMenuItem}>{getText('DashboardMenuComponent.js_8_U2V0dG')}<img src={getText("DashboardMenuComponent.js_41_L2ltYW")} alt={getText("DashboardMenuComponent.js_13_U2V0dG")} className={styles.settingsIcon} />
                        </a>
                        <a href={getText("DashboardMenuComponent.js_19_L2Rhc2")} className={styles.subMenuItem}>{getText('DashboardMenuComponent.js_8_U2VjdX')}</a>
                        <a href={getText("DashboardMenuComponent.js_30_L2Rhc2")} className={styles.subMenuItem}>{getText('DashboardMenuComponent.js_27_QmlsbG')}</a>
                        <a href={getText("DashboardMenuComponent.js_7_L2xvZ2")} className={styles.subMenuItem}>{getText('DashboardMenuComponent.js_7_TG9nIE')}</a>
                    </div>}
            </div>
            
        </div>;
};
export default DashboardMenuComponent;