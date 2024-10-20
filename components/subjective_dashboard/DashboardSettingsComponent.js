import { getText } from '../utils/getText.js';
console.log('Loading DashboardSettingsComponent.js');
import React, { useState } from 'react';
import styles from '../../public/styles/SettingsComponent.module.css';
const SettingsComponent = () => {
  console.log('Rendering SettingsComponent');
  const [settings, setSettings] = useState({
    username: getText("DashboardSettingsComponent.js_7_VXNlcj"),
    email: getText("DashboardSettingsComponent.js_16_dXNlck"),
    phone: getText("DashboardSettingsComponent.js_11_KzEyMz"),
    country: getText("DashboardSettingsComponent.js_3_VVNB"),
    notifications: true,
    darkMode: false,
    firstName: getText("DashboardSettingsComponent.js_4_Sm9obg"),
    lastName: getText("DashboardSettingsComponent.js_3_RG9l"),
    profilePicture: getText("DashboardSettingsComponent.js_34_L3B1Ym")
  });
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  const handleSave = () => {
    // Mock save function
    alert('Settings saved!');
  };
  const handleCopy = text => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };
  const handlePictureChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        setSettings({
          ...settings,
          profilePicture: event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  console.log('Returning from SettingsComponent');
  return <div className={styles.settingsContainer}>
            <div className={styles.securitySection}>
                <h1 className={styles.securityTitle}>{getText('DashboardSettingsComponent.js_8_U2VjdX')}</h1>
                <div className={styles.securityItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_9_YXBpVG")}>{getText('DashboardSettingsComponent.js_10_QVBJIF')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_9_YXBpVG")} name={getText("DashboardSettingsComponent.js_9_YXBpVG")} value={getText("DashboardSettingsComponent.js_14_WW91ci")} readOnly />
                    <button className={styles.securityButton} onClick={() => handleCopy('Your API Token')}>{getText('DashboardSettingsComponent.js_4_Q29weQ')}</button>
                    <button className={styles.securityButton}>{getText('DashboardSettingsComponent.js_10_UmVnZW')}</button>
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_13_dHdvRm")}>{getText('DashboardSettingsComponent.js_31_VHdvLU')}</label>
                    <input type={getText("DashboardSettingsComponent.js_8_Y2hlY2")} id={getText("DashboardSettingsComponent.js_13_dHdvRm")} name={getText("DashboardSettingsComponent.js_13_dHdvRm")} checked={false} onChange={handleChange} />
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_9_c2Vjcm")}>{getText('DashboardSettingsComponent.js_10_U2Vjcm')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_9_c2Vjcm")} name={getText("DashboardSettingsComponent.js_9_c2Vjcm")} value={getText("DashboardSettingsComponent.js_15_WW91ci")} readOnly />
                    <button className={styles.securityButton} onClick={() => handleCopy('Your Secret Key')}>{getText('DashboardSettingsComponent.js_4_Q29weQ')}</button>
                    <button className={styles.securityButton}>{getText('DashboardSettingsComponent.js_10_UmVnZW')}</button>
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_13_cmVzZX")}>{getText('DashboardSettingsComponent.js_14_UmVzZX')}</label>
                    <button className={styles.securityButton}>{getText('DashboardSettingsComponent.js_5_UmVzZX')}</button>
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_13_Y29sbG")}>{getText('DashboardSettingsComponent.js_22_QWRkIE')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_13_Y29sbG")} name={getText("DashboardSettingsComponent.js_13_Y29sbG")} placeholder={getText("DashboardSettingsComponent.js_24_RW50ZX")} />
                    <button className={styles.securityButton}>{getText('DashboardSettingsComponent.js_3_QWRk')}</button>
                </div>
            </div>
            <div className={styles.settingsSection}>
                <h1 className={styles.settingsTitle}>{getText('DashboardSettingsComponent.js_16_VXNlci')}</h1>
                <div className={styles.profilePictureContainer}>
                    <img src={settings.profilePicture} alt={getText("DashboardSettingsComponent.js_7_UHJvZm")} className={styles.profilePicture} />
                    <input type={getText("DashboardSettingsComponent.js_4_ZmlsZQ")} id={getText("DashboardSettingsComponent.js_19_cHJvZm")} accept={getText("DashboardSettingsComponent.js_7_aW1hZ2")} onChange={handlePictureChange} />
                    <span className={styles.changeLink} onClick={() => document.getElementById('profilePictureInput').click()}>{getText('DashboardSettingsComponent.js_6_Q2hhbm')}</span>
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_9_Zmlyc3")}>{getText('DashboardSettingsComponent.js_10_Rmlyc3')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_9_Zmlyc3")} name={getText("DashboardSettingsComponent.js_9_Zmlyc3")} value={settings.firstName} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_8_bGFzdE")}>{getText('DashboardSettingsComponent.js_9_TGFzdC')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_8_bGFzdE")} name={getText("DashboardSettingsComponent.js_8_bGFzdE")} value={settings.lastName} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_8_dXNlcm")}>{getText('DashboardSettingsComponent.js_8_VXNlcm')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_8_dXNlcm")} name={getText("DashboardSettingsComponent.js_8_dXNlcm")} value={settings.username} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_5_ZW1haW")}>{getText('DashboardSettingsComponent.js_5_RW1haW')}</label>
                    <input type={getText("DashboardSettingsComponent.js_5_ZW1haW")} id={getText("DashboardSettingsComponent.js_5_ZW1haW")} name={getText("DashboardSettingsComponent.js_5_ZW1haW")} value={settings.email} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_5_cGhvbm")}>{getText('DashboardSettingsComponent.js_5_UGhvbm')}</label>
                    <input type={getText("DashboardSettingsComponent.js_3_dGVs")} id={getText("DashboardSettingsComponent.js_5_cGhvbm")} name={getText("DashboardSettingsComponent.js_5_cGhvbm")} value={settings.phone} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_7_Y291bn")}>{getText('DashboardSettingsComponent.js_7_Q291bn')}</label>
                    <input type={getText("DashboardSettingsComponent.js_4_dGV4dA")} id={getText("DashboardSettingsComponent.js_7_Y291bn")} name={getText("DashboardSettingsComponent.js_7_Y291bn")} value={settings.country} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_13_bm90aW")}>{getText('DashboardSettingsComponent.js_13_Tm90aW')}</label>
                    <input type={getText("DashboardSettingsComponent.js_8_Y2hlY2")} id={getText("DashboardSettingsComponent.js_13_bm90aW")} name={getText("DashboardSettingsComponent.js_13_bm90aW")} checked={settings.notifications} onChange={handleChange} />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor={getText("DashboardSettingsComponent.js_8_ZGFya0")}>{getText('DashboardSettingsComponent.js_9_RGFyay')}</label>
                    <input type={getText("DashboardSettingsComponent.js_8_Y2hlY2")} id={getText("DashboardSettingsComponent.js_8_ZGFya0")} name={getText("DashboardSettingsComponent.js_8_ZGFya0")} checked={settings.darkMode} onChange={handleChange} />
                </div>
                <button className={styles.saveButton} onClick={handleSave}>{getText('DashboardSettingsComponent.js_13_U2F2ZS')}</button>
            </div>
        </div>;
};
export default SettingsComponent;