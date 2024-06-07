import React, { useState } from 'react';
import styles from '../styles/Menu.module.css';
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

    const menuItems = [
        { href: "", imageUrl: "images/purple_angel_semantizer.jpg", label: "GT® Subjective Semantizer", text: "Knowledge Is Alive" },
        { href: "", imageUrl: "images/angel_red_2.png", label: "GT® Subjective Cognitive Booster", text: "Your World is Unforgetable" },
        { href: "", imageUrl: "images/angel_blue_2.png", label: "GT® Subjective Adapter", text: "Migrating from legacy 3rd Person Technology" },
        { href: "", imageUrl: "images/angel_blue_2.png", label: "GT® Subjective Domotics", text: "Extend Your Body PhysicalBodyParts" },
        { href: "", imageUrl: "images/yellow_angel_1.png", label: "GT® Subjective Advertising", text: "MarketingLess Advertising" },
        { href: "products_subjective_thermo_currency", imageUrl: "images/angel-2.jpeg", label: "GT® Subjective Thermo-Currency", text: "Post-Scarcity Era" },
        { href: "", imageUrl: "images/angel_greeen_3.png", label: "GT® Subjective Instant Job Finder", text: "Just Sit&Work" },
        { href: "", imageUrl: "images/angel_pink_3.png", label: "GT® Subjective ForMate", text: "No More Forms" },
        { href: "", imageUrl: "images/angel_red_1.png", label: "GT® Subjective BeMyself", text: "AI Learns to BeYourSelf" },
        { href: "", imageUrl: "images/angel_red_1.png", label: "GT® Subjective Logistics", text: "No More Postal Services" },
    ];

    const renderColumns = () => {
        const columns = [];
        for (let i = 0; i < menuItems.length; i += 2) {
            columns.push(
                <div className={styles.column} key={i}>
                    <div className={styles.menuItem}>
                        <a href={menuItems[i].href}><ImageMenuItem imageUrl={menuItems[i].imageUrl} label={menuItems[i].label} text={menuItems[i].text} /></a>
                    </div>
                    {menuItems[i + 1] && (
                        <div className={styles.menuItem}>
                            <a href={menuItems[i + 1].href}><ImageMenuItem imageUrl={menuItems[i + 1].imageUrl} label={menuItems[i + 1].label} text={menuItems[i + 1].text} /></a>
                        </div>
                    )}
                </div>
            );
        }
        return columns;
    };

    return (
        <div className={styles.menu}>

            <div 
                className={`${styles.menuItem} ${styles.link}`} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div id="logo">
                    <a href="/"><img src="images/logo_horizontal.png" alt="Logo" /></a>
                </div>
                {showSubMenu && (
                    <div className={styles.subMenu}>
                        {renderColumns()}
                    </div>
                )}
            </div>
            <a href="impact"><div className={styles.menuItem}>Impact</div></a>
            <a href=""><div className={styles.menuItem}>How It Works</div></a>
            <a href="scientific_research"><div className={styles.menuItem}>Scientific Research</div></a>
            <a href=""><div className={styles.menuItem}>Careers</div></a>
            <a href="investor"><div className={styles.menuItem}>Investor</div></a>
            <a href="contact"><div className={styles.menuItem}>Contact|Press</div></a>
            <button className={styles.signUpButton}>Sign Up</button>
        </div>
    );
};

export default Menu;
