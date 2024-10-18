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

    return (
        <div className={styles.menu}>
            <div
                className={`${styles.menuItem} ${styles.link}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div id="logo">
                    <a href="/">
                        <img src="../images/logo_horizontal.png" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className={styles.itemContainer}>
                <a href="../consulting">
                    <div className={styles.menuItem}>Business</div>
                </a>
                <a href="../download">
                    <div className={styles.menuItem}>Download</div>
                </a>

                <a href="../investor">
                    <div className={styles.menuItem}>Investors</div>
                </a>
                <a href="../pricing">
                    <div className={styles.menuItem}>Pricing</div>
                </a>
                <a href="../contact">
                    <div className={styles.menuItem}>Contact</div>
                </a>
            </div>
            <a className={styles.signUpYellowButton} href="../sign_up">
                <button className={styles.signUpButton}>Sign Up</button>
            </a>
        </div>
    );
};

export default Menu;
