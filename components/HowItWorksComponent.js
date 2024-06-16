import React from 'react';
import styles from '../styles/HowItWorksComponent.module.css';

const HowItWorksComponent = () => {
    return (
        <div className={styles.howItWorksContainer}>
            <h1 className={styles.title}>How It Works</h1>
            
            <section className={styles.section}>
                <h2 className={styles.subheading}>KnowledgeHook Technology</h2>
                <p className={styles.text}>
                    Subjective Technologies transform the way humans and machines interact.
                    Subjective Technologies introduce KnowledgeHooks as a key mechanism to seamlessly integrate user experiences across digital and physical realms. These hooks capture and utilize contextual information to automate and streamline interactions, reducing the need for explicit user input and enhancing overall efficiency.
                </p>
                <p className={styles.text}>
                Visual Detection and Command Confirmation
                KnowledgeHooks operate by detecting certain objects in the user's environment and highlighting them in distinct colors. This visual cue helps the user identify relevant items and actions. When an object is highlighted, a stack of commands appears, allowing the user to confirm the intended input or action. Over time, as the system learns from the user's confirmations, it will execute these actions automatically without requiring further confirmation, thus transitioning towards 0-Input technology.
                </p>
                <h2 className={styles.subheading}>Current Third-Person Technology VS Subjective Technologies</h2>
                <p className={styles.text}>
                    In order to see the difference 
                    In third-person technologies, interacting with a robotic arm would involve explicit commands and manual input. For example, to lift the arm and rotate it 45 degrees, you would need to provide a detailed set of instructions. Here’s how it typically works:
                    Command-Based Input: The user would need to specify each movement step-by-step, such as:
                    "Move arm up by 10 cm."
                    "Rotate arm by 45 degrees."
                    Manual Control: Each action requires precise control inputs, possibly through a joystick, keyboard, or touchscreen interface.
                    Learning Curve: Users need to learn the specific commands and control mechanisms to operate the arm efficiently.
                    Lack of Intuitiveness: The interaction is mechanical and disconnected from natural human movements, making it less intuitive and more cumbersome.
                    Subjective Technologies
                    In subjective technologies, the interaction with a robotic arm would be more intuitive and seamlessly integrated with the user’s natural intentions and context. Here’s how it works:

                    Context-Aware Interaction: The system understands the user’s intent based on context and past behaviors. For example, it knows you want to lift the arm because you are reaching for something.
                    Minimal Input: Instead of giving explicit commands, the user might simply think about the movement or make a gesture that the system recognizes.
                    Adaptive Learning: Over time, the system learns the user’s preferences and common actions, making the process more efficient. For instance, it remembers that you often lift the arm to a certain height and angle when reaching for an object on a shelf.
                    Intuitive and Natural: The interaction mimics natural human movements. The system operates more like an extension of the user’s body, making it feel more intuitive. It’s akin to how you move your own arm without thinking about the specific muscles and joints involved.                
                </p>
                <div className={styles.imagePlaceholder}>
                    <p>Introduction Image</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Our Approach</h2>
                <p className={styles.text}>
                    Our approach integrates the latest advancements in technology with user-centric design principles.
                    We aim to create intuitive, efficient, and effective solutions that enhance human capabilities.
                </p>
                <div className={styles.videoPlaceholder}>
                    <video className={styles.video} src="video/brainboost_marketing_videos_goldenthinker_throw_ball.mp4" autoPlay muted loop />
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>The Technology</h2>
                <p className={styles.text}>
                    Subjective Technologies utilize state-of-the-art algorithms and hardware to deliver unparalleled performance and reliability.
                    Our systems are designed to adapt and evolve with user needs, ensuring long-term satisfaction and utility.
                </p>
                <div className={styles.imagePlaceholder}>
                    <p>Technology Image</p>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksComponent;
