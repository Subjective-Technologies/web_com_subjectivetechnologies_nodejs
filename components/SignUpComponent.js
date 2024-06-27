// components/SignUpComponent.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, googleProvider, githubProvider, twitterProvider } from '../config/firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../public/styles/SignUpComponent.module.css';

const SignUpComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGitHubSignIn = async () => {
        try {
            await signInWithPopup(auth, githubProvider);
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleTwitterSignIn = async () => {
        try {
            await signInWithPopup(auth, twitterProvider);
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignInRedirect = () => {
        router.push('/sign_in');
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
                        <img src="/images/icons/1298745_google_brand_branding_logo_network_icon.svg" alt="Google icon" className={styles.icon} />
                        Sign up with Google
                    </button>
                    <button onClick={handleGitHubSignIn} className={`${styles.signUpButton} ${styles.githubButton}`}>
                        <img src="/images/icons/1221583_github_logo_media_social_icon.png" alt="GitHub icon" className={styles.icon} />
                        Sign Up with GitHub
                    </button>
                    <button onClick={handleTwitterSignIn} className={`${styles.signUpButton} ${styles.twitterButton}`}>
                        <img src="/images/icons/11053969_x_logo_twitter_new_brand_icon.svg" alt="Twitter icon" className={styles.icon} />
                        Sign Up with Twitter
                    </button>
                </div>
                <div className={styles.signInPrompt}>
                    <p>Already User?</p>
                    <button onClick={handleSignInRedirect} className={styles.signInButton}>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpComponent;
