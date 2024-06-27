// components/SignInComponent.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, googleProvider, githubProvider, twitterProvider } from '../config/firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../public/styles/SignInComponent.module.css';

const SignInComponent = () => {
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

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleForgotPasswordRedirect = () => {
        router.push('/reset_pass');
    };

    const handleSignUpRedirect = () => {
        router.push('/sign_up');
    };

    return (
        <div className={styles.signInContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Sign In</h1>
                <form onSubmit={handleSignIn} className={styles.signInForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.input} />
                    </div>
                    <button type="submit" className={styles.submitButton}>Sign In</button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                <div className={styles.orSeparator}>OR</div>
                <div className={styles.signInOptions}>
                    <button onClick={handleGoogleSignIn} className={`${styles.signInButton} ${styles.googleButton}`}>
                        <img src="/images/icons/1298745_google_brand_branding_logo_network_icon.svg" alt="Google icon" className={styles.icon} />
                        Sign in with Google
                    </button>
                    <button onClick={handleGitHubSignIn} className={`${styles.signInButton} ${styles.githubButton}`}>
                        <img src="/images/icons/1221583_github_logo_media_social_icon.png" alt="GitHub icon" className={styles.icon} />
                        Sign in with GitHub
                    </button>
                    <button onClick={handleTwitterSignIn} className={`${styles.signInButton} ${styles.twitterButton}`}>
                        <img src="/images/icons/11053969_x_logo_twitter_new_brand_icon.svg" alt="Twitter icon" className={styles.icon} />
                        Sign in with Twitter
                    </button>
                </div>
                <div className={styles.forgotPasswordPrompt}>
                    <p>Forgot your password?</p>
                    <button onClick={handleForgotPasswordRedirect} className={styles.resetButton}>Reset Password</button>
                </div>
                <div className={styles.signUpPrompt}>
                    <p>New User?</p>
                    <button onClick={handleSignUpRedirect} className={styles.signUpButton}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;
