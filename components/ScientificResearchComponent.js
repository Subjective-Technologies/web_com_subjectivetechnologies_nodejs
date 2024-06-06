import React from 'react';
import styles from '../styles/ScientificResearchComponent.module.css';

const ScientificResearchComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Subjective Technologies: An Exoskeleton For The Mind</h1>
            <p className={styles.description}>
                This groundbreaking technology is the mecca of Human-Computer Interaction and Swarm Intelligence research fields. 
                Discover our latest scientific papers that delve into the intricacies and applications of Subjective Technologies.
            </p>
            <div className={styles.papersContainer}>
                <div className={styles.paperFrame}>
                    <iframe 
                        src="path/to/your/pdf1.pdf" 
                        className={styles.iframe}
                        title="Subjective Technologies Paper 1"
                    ></iframe>
                </div>
                <div className={styles.paperFrame}>
                    <iframe 
                        src="path/to/your/pdf2.pdf" 
                        className={styles.iframe}
                        title="Subjective Technologies Paper 2"
                    ></iframe>
                </div>
            </div>
            <p className={styles.note}>
                These papers are also available on <a href="https://www.researchgate.net/publication/375825344_Subjective_Technologies_An_Exoskeleton_for_the_Mind_Technology_Design_from_a_Trans-Humanist_Perspective_0-Input_Technology_A_Paradigm_Shift_in_Human-Machine_Interaction?utm_source=twitter&rgutm_meta1=eHNsLTBEZFVYcFExUXoya0kzcEhMc0poOWN6T2x2bVV1RGxGTkI4Mm1TL01NVkxwekp6a0ROMTdjUEp6RG9MWUxVNnppcTdjY1plNk54aDVYaFdReElYeFo0MD0%3D " target="_blank" rel="noopener noreferrer" className={styles.link}>ResearchGate</a>.
            </p>
            <div className={styles.orcidSection}>
                <p className={styles.orcidLabel}><a href="https://orcid.org/0009-0005-2539-504X"><img src="images/orcid.logo.svg"/></a></p>
                <p className={styles.orcidCode}><a href="https://orcid.org/0009-0005-2539-504X">0009-0005-2539-504X</a></p> {/* Replace with your actual ORCID code */}
            </div>
        </div>
    );
};

export default ScientificResearchComponent;