// components/Menu.js
import React, { useState } from 'react';
import styles from '../styles/Menu.module.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={styles.toggleButton} onClick={toggleSidebar}>Menu</button>
            <nav className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>
                        Products
                        <ul className={styles.navItemDropdown}>
                            <li>Subjective Cognitive Booster</li>
                            <li>Subjective Semantizer</li>
                            <li>Subjective Domotics</li>
                            <li>Subjective Advertising</li>
                            <li>Subjective Instant Job Finder</li>
                            <li>Subjective ForMate</li>
                            <li>Subjective Thermo-Currency</li>
                            <li>Subjective Adapter</li>
                            <li>Subjective BeMyself</li>
                        </ul>
                    </li>
                    <li className={styles.navItem}>Impact</li>
                    <li className={styles.navItem}>How It Works</li>
                    <li className={styles.navItem}>Scientific Research</li>
                    <li className={styles.navItem}>Investors</li>
                    <li className={styles.navItem}>Contact</li>
                    <li className={styles.navItem}>About</li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;
