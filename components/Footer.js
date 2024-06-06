// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h4>Products</h4>
                    <ul>
                        <li><a href="">GT® Subjective Semantizer</a></li>
                        <li><a href="">GT® Subjective Cognitive Booster</a></li>
                        <li><a href="">GT® Subjective Domotics</a></li>
                        <li><a href="">GT® Subjective Advertising</a></li>
                        <li><a href="">GT® Subjective Instant Job Finder</a></li>
                        <li><a href="">GT® Subjective ForMate</a></li>
                        <li><a href="">GT® Subjective Thermo-Currency</a></li>
                        <li><a href="">GT® Subjective Adapter</a></li>
                        <li><a href="">GT® Subjective BeMyself</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>About</h4>
                    <ul>
                        <li><a href="impact">Impact</a></li>
                        <li><a href="">How It Works</a></li>
                        <li><a href="">Scientific Research</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Investors</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© 2023 Subjective Technologies</p>
                <p>Copyright © BrainBoost Limited, 2019. All rights reserved. goldenthinker.com “THE THINKER ®” and “GOLDEN THINKER ®” are registered trademarks of BrainBoost Limited, in Ireland and the United States. Company Registered in Ireland cro no. 589489. Registered VAT no. IE3435462UH.</p>
            </div>
        </footer>
    );
};

export default Footer;
