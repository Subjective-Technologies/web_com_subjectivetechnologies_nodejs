import React from 'react';
import styles from '../../public/styles/ProfileComponent.module.css';

const ProfileComponent = () => {
    const userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        picture: '/images/profile/john_doe.jpg',
        country: 'United States',
        address: '1234 Main St, Anytown, USA',
        occupation: 'Software Engineer',
        bio: 'Passionate developer with a love for creating innovative solutions.',
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <h1 className={styles.profileTitle}>Profile</h1>
            </div>
            <div className={styles.profileDetails}>
                <div className={styles.profileItem}>
                    <img src={userProfile.picture} alt={userProfile.name} className={styles.profileItemImage} />
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Name</p>
                        <p className={styles.profileItemValue}>{userProfile.name}</p>
                    </div>
                </div>
                <div className={styles.profileItem}>
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Email</p>
                        <p className={styles.profileItemValue}>{userProfile.email}</p>
                    </div>
                </div>
                <div className={styles.profileItem}>
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Phone</p>
                        <p className={styles.profileItemValue}>{userProfile.phone}</p>
                    </div>
                </div>
                <div className={styles.profileItem}>
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Country</p>
                        <p className={styles.profileItemValue}>{userProfile.country}</p>
                    </div>
                </div>
                <div className={styles.profileItem}>
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Address</p>
                        <p className={styles.profileItemValue}>{userProfile.address}</p>
                    </div>
                </div>
                <div className={styles.profileItem}>
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Occupation</p>
                        <p className={styles.profileItemValue}>{userProfile.occupation}</p>
                    </div>
                </div>
                <div className={styles.profileItem}>
                    <div className={styles.profileItemInfo}>
                        <p className={styles.profileItemLabel}>Bio</p>
                        <p className={styles.profileItemValue}>{userProfile.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
