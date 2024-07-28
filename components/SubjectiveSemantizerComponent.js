console.log('Loading SubjectiveSemantizerComponent.js');
import React from 'react';
import styles from '../public/styles/SubjectiveSemantizerComponent.module.css';

const SubjectiveSemantizerComponent = () => {
console.log('Rendering SubjectiveSemantizerComponent');
console.log('Rendering SubjectiveSemantizerComponent');
console.log('Rendering SubjectiveSemantizerComponent');
console.log('Returning from SubjectiveSemantizerComponent');
console.log('Returning from SubjectiveSemantizerComponent');
console.log('Returning from SubjectiveSemantizerComponent');
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="images/subjective_semantizer.png" alt="Subjective Semantizer" className={styles.roundImage} />
            </div>
            <h1 className={styles.title}>GT® Subjective Semantizer</h1>
            <p className={styles.description}>With our Subjective Semantizer we can say that our <em>"Knowledge Is Alive"</em></p>
            <p className={styles.content}>
                The GT® Subjective Semantizer revolutionizes the way we interact with knowledge. Leveraging advanced AI and semantic technologies, it transforms static data into dynamic, living knowledge, making information more accessible, interactive, and useful.
            </p>

            {/* Provided text starts here */}
            <h2 className={styles.sectionTitle}>Evolution of Knowledge Expression</h2>
            <p className={styles.content}>
                Knowledge Hooks, as part of Subjective Technologies, facilitate the implementation of the Subjective Semantizer by mirroring and augmenting the user's cognitive processes. This system learns and replicates user interactions with the world and devices, creating an experience similar to mind-reading. It effectively reduces cognitive load and enhances the user's cognitive abilities by providing real-time, context-sensitive cognitive services​​.
            </p>

            <h3 className={styles.subSectionTitle}>Evolution of Knowledge Expression</h3>
            <p className={styles.content}>
                The evolution of how humans express and manage knowledge has significantly impacted cognitive technologies:
            </p>
            <ul className={styles.list}>
                <li>Memorization: Initially, humans relied on memorization to pass down knowledge orally.</li>
                <li>Writing: The invention of writing allowed knowledge to be externalized and shared more broadly. However, this third-person technology demanded significant dedication and cognitive skills to read, understand, and internalize information.</li>
                <li>Digital Storage and Access: The digital age brought about vast databases and search engines, making knowledge more accessible but still requiring active retrieval and interpretation by users.</li>
                <li>Subjective Technologies: These represent a shift from third-person tools to a user-centric paradigm. Unlike traditional tools, which require extensive training, Subjective Technologies aim to augment human capabilities seamlessly and intuitively, minimizing the need for conscious user input​​​​.</li>
            </ul>
            <img width="100%" src="/images/semantizer_image_apa7_halfpage_landscape_template_1875x2550 (1).png"/>

            <h3 className={styles.subSectionTitle}>Transforming Third-Person Technology into Subjective Experience</h3>
            <p className={styles.content}>
                Third-person technologies, such as writing, are external and objective, requiring conscious effort to use and understand. Subjective Technologies turn this process into a subjective experience by becoming an integral part of the user's cognitive process. This is achieved through:
            </p>
            <ul className={styles.list}>
                <li>0-Input Technology: This design paradigm integrates technology with the human mind in a non-invasive manner. It enables seamless interaction without the need for constant conscious input from the user. The technology learns from the user's context and adapts accordingly, functioning as an extension of the user's own cognitive abilities​​.</li>
                <li>Virtual Modifications: Tools and interfaces are replaced by virtual body parts, such as VirtualGlands, which perform functions unconsciously in real-time. This integration transforms traditional concepts like currency transactions into unconscious processes, making technology an inherent part of the user's subjective experience​​.</li>
                <li>User-Centric Design: By prioritizing the user's experience and minimizing learning curves, Subjective Technologies create a more intuitive and efficient interaction with technology. This approach aims to democratize intelligence, promoting inclusion and enhancing the quality of life, especially for individuals with cognitive disabilities​​​​.</li>
            </ul>

            <p className={styles.content}>
                In summary, Knowledge Hooks in Subjective Technologies implement the Subjective Semantizer by transforming external third-person knowledge tools into integrated, intuitive, and personalized cognitive aids. This shift marks a significant evolution from memorization and writing to a future where technology enhances human intelligence seamlessly and subjectively.
            </p>
            {/* Provided text ends here */}
        </div>
    );
};

export default SubjectiveSemantizerComponent;
