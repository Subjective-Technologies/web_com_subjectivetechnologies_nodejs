// components/Menu.js
import React, { useState } from 'react';
import styles from '../public/styles/Menu.module.css';
import ImageMenuItem from './ImageMenuItem.js';

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
                onMouseLeave={handleMouseLeave}>
                <div id="logo">
                    <a href="/"><img src="../images/logo_horizontal.png" alt="Logo" /></a>
                </div>
            </div>
            <a href="../download"><div className={styles.menuItem}>Download</div></a>
            <a href="../how_it_works"><div className={styles.menuItem}>How It Works</div></a>
            <a href="../careers"><div className={styles.menuItem}>Careers</div></a>
            <a href="../investor"><div className={styles.menuItem}>Investors</div></a>
            <a href="../consulting"><div className={styles.menuItem}>Consulting</div></a>
            <a href="../contact"><div className={styles.menuItem}>Contact|Press</div></a>
            <a href="../sign_up"><button className={styles.signUpButton}>Sign Up</button></a>
        </div>
    );
};

export default Menu;
