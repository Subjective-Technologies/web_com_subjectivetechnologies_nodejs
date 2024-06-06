import React, { useState } from 'react';
import styles from '../styles/Menu.module.css';
import ImageMenuItem from './ImageMenuItem.js'


const Menu = () => {
    return (  
    <div  className={`${styles.menu} ${styles.link}`}>
        
        <div id="logo"> 
            <img src="images/logo_horizontal.png"/>  
        </div>


        <div className={`${styles.menuItem} ${styles.link}`}>
            Products
            <div className={styles.subMenu}>
                <div id="left" className={styles.leftMenu}>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`} imageUrl="images/purple_angel_semantizer.jpg" label="GT® Subjective Semantizer" text="In the Post-Education Era - THE KNOWLEDGE IS ALIVE."/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`}  imageUrl="images/angel_red_2.png" label="GT® Subjective Cognitive Booster" text="Day to day nothing you will forget."/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`}  imageUrl="images/angel_blue_2.png" label="GT® Subjective Domotics" text="Menu Item Text"/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`}  imageUrl="images/yellow_angel_1.png" label="GT® Subjective Advertising" text="Menu Item Text"/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`}  imageUrl="images/angel_greeen_3.png" label="GT® Subjective Instant Job Finder" text="Menu Item Text"/></a>
                    </div>
                </div>
                <div id="right" className={styles.rightMenu}>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`}  imageUrl="images/angel_pink_3.png" label="GT® Subjective ForMate" text="Menu Item Text"/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href="products_subjective_thermo_currency"><ImageMenuItem className={`styles.link`}  imageUrl="images/angel-2.jpeg" label="GT® Subjective Thermo-Currency" text="Menu Item Text"/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem  className={`styles.link`} imageUrl="images/angel_blue_2.png" label="GT® Subjective Adapter" text="Menu Item Text"/></a>
                    </div>
                    <div className={`${styles.menuItem} ${styles.link}`}>
                        <a href=""><ImageMenuItem className={`styles.link`}  imageUrl="images/angel_red_1.png" label="GT® Subjective BeMyself" text="Menu Item Text"/></a>
                    </div>
                </div>
            </div>
        </div>
        <a href="impact"><div className={`${styles.menuItem} ${styles.link}`}>Impact</div></a>
        <a href=""><div className={`${styles.menuItem} ${styles.link}`}>How It Works</div></a>
        <a href=""><div className={`${styles.menuItem} ${styles.link}`}>Scientific Research</div></a>
        <a href=""><div className={`${styles.menuItem} ${styles.link}`}>Careers</div></a>
        <a href=""><div className={`${styles.menuItem} ${styles.link}`}>Investors</div></a>
        <a href=""><div className={`${styles.menuItem} ${styles.link}`}>Contact</div></a>
        <button className={styles.signUpButton}>Sign Up</button>
    </div>
           
    );
};

export default Menu;
