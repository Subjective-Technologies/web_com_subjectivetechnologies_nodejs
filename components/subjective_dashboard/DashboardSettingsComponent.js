import React, { useState } from 'react';
import styles from '../../public/styles/SettingsComponent.module.css';

const SettingsComponent = () => {
    const [settings, setSettings] = useState({
        username: 'User123',
        email: 'user@example.com',
        phone: '+1234567890',
        country: 'USA',
        notifications: true,
        darkMode: false,
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: '/public/images/profile-picture.jpg'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSave = () => {
        // Mock save function
        alert('Settings saved!');
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard');
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSettings({ ...settings, profilePicture: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.settingsContainer}>
            <div className={styles.securitySection}>
                <h1 className={styles.securityTitle}>Security</h1>
                <div className={styles.securityItem}>
                    <label htmlFor="apiTokens">API Tokens</label>
                    <input
                        type="text"
                        id="apiTokens"
                        name="apiTokens"
                        value="Your API Token"
                        readOnly
                    />
                    <button className={styles.securityButton} onClick={() => handleCopy('Your API Token')}>Copy</button>
                    <button className={styles.securityButton}>Regenerate</button>
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor="twoFactorAuth">Two-Factor Authentication (2FA)</label>
                    <input
                        type="checkbox"
                        id="twoFactorAuth"
                        name="twoFactorAuth"
                        checked={false}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor="secretKey">Secret Key</label>
                    <input
                        type="text"
                        id="secretKey"
                        name="secretKey"
                        value="Your Secret Key"
                        readOnly
                    />
                    <button className={styles.securityButton} onClick={() => handleCopy('Your Secret Key')}>Copy</button>
                    <button className={styles.securityButton}>Regenerate</button>
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor="resetPassword">Reset Password</label>
                    <button className={styles.securityButton}>Reset</button>
                </div>
                <div className={styles.securityItem}>
                    <label htmlFor="collaborators">Add Collaborator Users</label>
                    <input
                        type="text"
                        id="collaborators"
                        name="collaborators"
                        placeholder="Enter collaborator email"
                    />
                    <button className={styles.securityButton}>Add</button>
                </div>
            </div>
            <div className={styles.settingsSection}>
                <h1 className={styles.settingsTitle}>User Information</h1>
                <div className={styles.profilePictureContainer}>
                    <img
                        src={settings.profilePicture}
                        alt="Profile"
                        className={styles.profilePicture}
                    />
                    <input
                        type="file"
                        id="profilePictureInput"
                        accept="image/*"
                        onChange={handlePictureChange}
                    />
                    <span
                        className={styles.changeLink}
                        onClick={() => document.getElementById('profilePictureInput').click()}
                    >
                        Change
                    </span>
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={settings.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={settings.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={settings.username}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={settings.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={settings.country}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="notifications">Notifications</label>
                    <input
                        type="checkbox"
                        id="notifications"
                        name="notifications"
                        checked={settings.notifications}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.settingsItem}>
                    <label htmlFor="darkMode">Dark Mode</label>
                    <input
                        type="checkbox"
                        id="darkMode"
                        name="darkMode"
                        checked={settings.darkMode}
                        onChange={handleChange}
                    />
                </div>
                <button className={styles.saveButton} onClick={handleSave}>
                    Save Settings
                </button>
            </div>
        </div>
    );
};

export default SettingsComponent;
