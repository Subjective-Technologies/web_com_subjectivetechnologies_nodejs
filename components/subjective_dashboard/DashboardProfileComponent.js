import { getText } from '../utils/getText.js';
console.log('Loading DashboardProfileComponent.js');
import React from 'react';
import styles from '../../public/styles/ProfileComponent.module.css';
const DashboardProfileComponent = () => {
  console.log('Rendering DashboardProfileComponent');
  const userProfile = {
    name: getText("DashboardProfileComponent.js_8_Sm9obi"),
    email: getText("DashboardProfileComponent.js_20_am9obi"),
    phone: getText("DashboardProfileComponent.js_11_KzEyMz"),
    picture: getText("DashboardProfileComponent.js_28_L2ltYW"),
    country: getText("DashboardProfileComponent.js_13_VW5pdG"),
    address: getText("DashboardProfileComponent.js_26_MTIzNC"),
    occupation: getText("DashboardProfileComponent.js_17_U29mdH"),
    bio: getText("DashboardProfileComponent.js_67_UGFzc2")
  };
  console.log('Returning from DashboardProfileComponent');
  return <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1 className={styles.profileTitle}>{getText('DashboardProfileComponent.js_7_UHJvZm')}</h1>
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.profileItem}>
          <img src={userProfile.picture} alt={userProfile.name} className={styles.profileItemImage} />
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_4_TmFtZQ')}</p>
            <p className={styles.profileItemValue}>{userProfile.name}</p>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_5_RW1haW')}</p>
            <p className={styles.profileItemValue}>{userProfile.email}</p>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_5_UGhvbm')}</p>
            <p className={styles.profileItemValue}>{userProfile.phone}</p>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_7_Q291bn')}</p>
            <p className={styles.profileItemValue}>{userProfile.country}</p>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_7_QWRkcm')}</p>
            <p className={styles.profileItemValue}>{userProfile.address}</p>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_10_T2NjdX')}</p>
            <p className={styles.profileItemValue}>{userProfile.occupation}</p>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.profileItemInfo}>
            <p className={styles.profileItemLabel}>{getText('DashboardProfileComponent.js_3_Qmlv')}</p>
            <p className={styles.profileItemValue}>{userProfile.bio}</p>
          </div>
        </div>
      </div>
    </div>;
};
export default DashboardProfileComponent;