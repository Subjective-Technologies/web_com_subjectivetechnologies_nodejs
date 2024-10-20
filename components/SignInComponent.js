import { getText } from '../utils/getText.js';
console.log('Loading SignInComponent.js');
// components/SignInComponent.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, googleProvider, githubProvider, twitterProvider } from '../config/firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../public/styles/SignInComponent.module.css';
const SignInComponent = () => {
  console.log('Rendering SignInComponent');
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
  const handleSignIn = async e => {
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
  console.log('Returning from SignInComponent');
  return <div className={styles.signInContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>{getText('SignInComponent.js_7_U2lnbi')}</h1>
                <form onSubmit={handleSignIn} className={styles.signInForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("SignInComponent.js_5_ZW1haW")} className={styles.label}>{getText('SignInComponent.js_5_RW1haW')}</label>
                        <input type={getText("SignInComponent.js_5_ZW1haW")} id={getText("SignInComponent.js_5_ZW1haW")} value={email} onChange={e => setEmail(e.target.value)} required className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("SignInComponent.js_8_cGFzc3")} className={styles.label}>{getText('SignInComponent.js_8_UGFzc3')}</label>
                        <input type={getText("SignInComponent.js_8_cGFzc3")} id={getText("SignInComponent.js_8_cGFzc3")} value={password} onChange={e => setPassword(e.target.value)} required className={styles.input} />
                    </div>
                    <button type={getText("SignInComponent.js_6_c3VibW")} className={styles.submitButton}>{getText('SignInComponent.js_7_U2lnbi')}</button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                <div className={styles.orSeparator}>{getText('SignInComponent.js_2_T1I=')}</div>
                <div className={styles.signInOptions}>
                    <button onClick={handleGoogleSignIn} className={`${styles.signInButton} ${styles.googleButton}`}>
                        <img src={getText("SignInComponent.js_65_L2ltYW")} alt={getText("SignInComponent.js_11_R29vZ2")} className={styles.icon} />{getText('SignInComponent.js_19_U2lnbi')}</button>
                    <button onClick={handleGitHubSignIn} className={`${styles.signInButton} ${styles.githubButton}`}>
                        <img src={getText("SignInComponent.js_55_L2ltYW")} alt={getText("SignInComponent.js_11_R2l0SH")} className={styles.icon} />{getText('SignInComponent.js_19_U2lnbi')}</button>
                    <button onClick={handleTwitterSignIn} className={`${styles.signInButton} ${styles.twitterButton}`}>
                        <img src={getText("SignInComponent.js_56_L2ltYW")} alt={getText("SignInComponent.js_12_VHdpdH")} className={styles.icon} />{getText('SignInComponent.js_20_U2lnbi')}</button>
                </div>
                <div className={styles.forgotPasswordPrompt}>
                    <p>{getText('SignInComponent.js_21_Rm9yZ2')}</p>
                    <button onClick={handleForgotPasswordRedirect} className={styles.resetButton}>{getText('SignInComponent.js_14_UmVzZX')}</button>
                </div>
                <div className={styles.signUpPrompt}>
                    <p>{getText('SignInComponent.js_9_TmV3IF')}</p>
                    <button onClick={handleSignUpRedirect} className={styles.signUpButton}>{getText('SignInComponent.js_7_U2lnbi')}</button>
                </div>
            </div>
        </div>;
};
export default SignInComponent;