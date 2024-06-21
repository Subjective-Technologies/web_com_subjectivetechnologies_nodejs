import React from 'react';
import styles from '../public/styles/ScientificResearchComponent.module.css';

const ScientificResearchComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Subjective Technologies<br/>An Exoskeleton For The Mind</h1>
            <p className={styles.description}>
                This groundbreaking technology is the mecca of Human-Computer Interaction and Swarm Intelligence research fields. 
                Discover our latest scientific papers that delve into the intricacies and applications of Subjective Technologies. 
                The paper on the left is in APA 7 format, ready to publish in journals related to Human-Computer Interaction or Swarm Intelligence.
            </p>
            <div className={styles.papersContainer}>
                <div className={styles.paperFrame}>
                    <iframe 
                        src="/downloads/Subjective Technologies_APA_7_en-202401142351.pdf" 
                        className={styles.iframe}
                        title="Subjective Technologies Paper 1"
                    ></iframe>
                    <p className={styles.paperNote}>APA 7 format</p>
                </div>
                <div className={styles.paperFrame}>
                    <iframe 
                        src="/downloads/subjective_technologies_an_exoskeleton_for_the_mind_print.pdf" 
                        className={styles.iframe}
                        title="Subjective Technologies Paper 2"
                    ></iframe>
                </div>
            </div>
            <p className={styles.note}>
                These papers are also available on:
            </p>
            <table className={styles.logoTable}>
                <tbody>
                    <tr>
                        <td className={styles.logoCell}>
                            <a href="https://www.researchgate.net/publication/375825344_Subjective_Technologies_An_Exoskeleton_for_the_Mind_Technology_Design_from_a_Trans-Humanist_Perspective_0-Input_Technology_A_Paradigm_Shift_in_Human-Machine_Interaction?utm_source=twitter&rgutm_meta1=eHNsLXB0TmNKRWtjcFFUOXkvcFhNWCsvelJVMGhGOGt4bkExbldkYi9IY2h3ZXZiVUJ1QStqV1BLbzgyYUNvakRJcjlFTzVGSVZMcm9iTGZRdVUvY2NQVmlqbz0%3D" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <img src="images/brainboost_marketing_images_research_gate_logo.png" alt="ResearchGate" className={styles.logo} />
                            </a>
                        </td>
                        <td className={styles.logoCell}>
                            <a href="https://www.techrxiv.org/doi/full/10.36227/techrxiv.24574774.v1" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <img src="images/brainboost_marketing_logo_images_techrxlv.png" alt="TechRxiv" className={styles.logo} />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.orcidSection}>
                <div className={styles.orcidRow}>
                    <a href="https://orcid.org/0009-0005-2539-504X">
                        <img src="images/orcid.logo.svg" alt="ORCID" className={styles.orcidLogo} />
                    </a>
                </div>
                <div className={styles.orcidRow}>
                    <a href="https://orcid.org/0009-0005-2539-504X" className={styles.orcidCode}>0009-0005-2539-504X</a>
                </div>
            </div>
            <div className={styles.bookSection}>
                <h2 className={styles.bookTitle}>Subjective Technologies</h2>
                <h3 className={styles.bookSubtitle}>The First 0-Input Technology<br/>A Trans-Humanistic Design Approach</h3>
                <a href="https://www.amazon.com/dp/B0CKL4MVMC/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1696620400&sr=8-1" target="_blank" rel="noopener noreferrer">
                    <img src="images/brainboost_research_subjective_book_cover.png" alt="Subjective Technologies Book Cover" className={styles.bookCover} />
                </a>
                <p className={styles.bookNote}>
                    There is an entire book I wrote on Subjective Technologies where I include more details of the implementation recipe. 
                    I go deeper on each of the subjects covered in the scientific papers. 
                    The book is available on <a href="https://www.amazon.com/dp/B0CKL4MVMC/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1696620400&sr=8-1" target="_blank" rel="noopener noreferrer" className={styles.link}>Amazon</a>.
                </p>
                <a href="https://www.amazon.com/dp/B0CKL4MVMC/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1696620400&sr=8-1" target="_blank" rel="noopener noreferrer">
                    <img src="images/brainboost_marketing_images_amazon_buy_button.png" alt="Buy on Amazon" className={styles.amazonButton} />
                </a>
            </div>
            <p className={styles.bookPitch}>
                Discover the in-depth exploration of Subjective Technologies in my book. 
                Get your copy now on <a href="https://www.amazon.com/dp/B0CKL4MVMC/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1696620400&sr=8-1" target="_blank" rel="noopener noreferrer" className={styles.link}>Amazon</a> and dive into the transformative potential of these groundbreaking innovations.
            </p>
        </div>
    );
};

export default ScientificResearchComponent;
