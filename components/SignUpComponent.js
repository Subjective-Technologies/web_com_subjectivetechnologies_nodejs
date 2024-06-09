import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config/firebaseConfig';
import styles from '../styles/SignUpComponent.module.css';

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const SignUpComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(error => setError(error.message));
    };

    const handleGitHubSignIn = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(error => setError(error.message));
    };

    const handleLinkedInSignIn = () => {
        const provider = new firebase.auth.OAuthProvider('linkedin.com');
        firebase.auth().signInWithPopup(provider).catch(error => setError(error.message));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => setError(error.message));
    };

    return (
        <div className={styles.signUpContainer}>
            <h1 className={styles.title}>Sign Up</h1>
            <div className={styles.testContent}>
                <p>Welcome to the sign-up page! Please sign up using one of the methods below:</p>
                <div className={styles.sampleVideo}>
                    <video width="100%" controls>
                        <source src="video/sample_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className={styles.sampleText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                </p>
            </div>
            <div className={styles.signUpOptions}>
                <button onClick={handleGoogleSignIn} className={styles.signUpButton}>Sign Up with Google</button>
                <button onClick={handleGitHubSignIn} className={styles.signUpButton}>Sign Up with GitHub</button>
                <button onClick={handleLinkedInSignIn} className={styles.signUpButton}>Sign Up with LinkedIn</button>
            </div>
            <div className={styles.orSeparator}>OR</div>
            <form onSubmit={handleSignUp} className={styles.signUpForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.input} />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default SignUpComponent;
