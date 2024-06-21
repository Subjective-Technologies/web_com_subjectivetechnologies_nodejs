import React from 'react';
import styles from '../public/styles/ContactComponent.module.css';

const ContactComponent = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Contact Us</h1>

            <div className={styles.gridContainer}>
                <div>
                    <h2 className={styles.subheading}>General Contact Information</h2>
                    <p className={styles.text}>Email: info@subjectivetechnologies.com</p>
                    <p className={styles.text}>Phone: +17867965039</p>
                    <div className={styles.pressContact}>
                    <img src="images/profile_yo_compressed.jpg" alt="Tommy Fox" className={styles.pressImage} />
                    <div className={styles.pressDetails}>
                    <h2 className={styles.subheading}>Press Contact</h2>
                        <p className={styles.text}>Name: Tommy Fox</p>
                        <p className={styles.text}>Email: tommyfox@subjectivetechnologies.com</p>
                        <p className={styles.text}>WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>+17867965039</a></p>
                    </div>
                </div>
                </div>

                <div className={styles.videoPlaceholder}>
                    <video className={styles.video} src="video/brainboost_marketing_videos_goldenthinker_throw_ball.mp4" autoPlay muted loop />
                </div>



                <div className={styles.formSection}>
                <h2 className={styles.subheading}>Get in Touch</h2>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input type="text" id="name" name="name" className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" name="email" className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone</label>
                        <input type="tel" id="phone" name="phone" className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea id="message" name="message" className={styles.textarea} required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>

                {/**/}
            </div>
            <div className={styles.bookImageContainer}>
                    <a href="https://www.amazon.com/dp/B0CKL4MVMC/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1696620400&sr=8-1">
                        <img src="images/360/brainboost_marketing_images_thefirstzeroinputtechnology_book_website.png" alt="Book Image" className={styles.bookImage} />
                    </a>
              </div> 

            </div>
        </div>
    );
};

export default ContactComponent;
