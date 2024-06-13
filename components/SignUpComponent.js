import React, { useState } from 'react';
import { auth, googleProvider, githubProvider, linkedinProvider } from '../config/firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/SignUpComponent.module.css';

const SignUpComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider).catch(error => setError(error.message));
    };

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider).catch(error => setError(error.message));
    };

    const handleLinkedInSignIn = () => {
        signInWithPopup(auth, linkedinProvider).catch(error => setError(error.message));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).catch(error => setError(error.message));
    };

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Sign Up</h1>
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
                <div className={styles.orSeparator}>OR</div>
                <div className={styles.signUpOptions}>
                    <button onClick={handleGoogleSignIn} className={`${styles.signUpButton} ${styles.googleButton}`}>
                        <img src="path-to-google-icon.svg" alt="Google icon" className={styles.googleIcon} />
                        Sign up with Google
                    </button>
                    <button onClick={handleGitHubSignIn} className={styles.signUpButton}>Sign Up with GitHub</button>
                    <button onClick={handleLinkedInSignIn} className={styles.signUpButton}>Sign Up with LinkedIn</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpComponent;
