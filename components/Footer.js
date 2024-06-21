// components/Footer.js
import React from 'react';
import styles from '../public/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h4>Products</h4>
                    <ul>
                    <ul>
                        <li><a href="subjective_semantizer">GT® Subjective Semantizer</a></li>
                        <li><a href="subjective_cognitive_booster">GT® Subjective Cognitive Booster</a></li>
                        <li><a href="subjective_domotics">GT® Subjective Domotics</a></li>
                        <li><a href="subjective_advertising">GT® Subjective Advertising</a></li>
                        <li><a href="subjective_instant_job_finder">GT® Subjective Instant Job Finder</a></li>
                        <li><a href="subjective_formate">GT® Subjective ForMate</a></li>
                        <li><a href="subjective_thermo_currency">GT® Subjective Thermo-Currency</a></li>
                        <li><a href="subjective_adapter">GT® Subjective Adapter</a></li>
                        <li><a href="subjective_bemyself">GT® Subjective BeMyself</a></li>
                        <li><a href="subjective_logistics">GT® Subjective Logistics</a></li>
                    </ul>

                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>About</h4>
                    <ul>
                        <li><a href="impact">Impact</a></li>
                        <li><a href="how_it_works">How It Works</a></li>
                        <li><a href="scientific_research">Scientific Research</a></li>
                        <li><a href="careers">Careers</a></li>
                        <li><a href="investor">Investors</a></li>
                        <li><a href="contact">Contact</a></li>
                        <li><a href="consulting">Consulting</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
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
