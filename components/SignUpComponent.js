import { getText } from '../utils/getText.js';
console.log('Loading SignUpComponent.js');
// components/SignUpComponent.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth, googleProvider, githubProvider, twitterProvider } from '../config/firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../public/styles/SignUpComponent.module.css';
const SignUpComponent = () => {
  console.log('Rendering SignUpComponent');
  console.log('Rendering SignUpComponent');
  console.log('Rendering SignUpComponent');
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
  const handleSignUp = async e => {
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
  console.log('Returning from SignUpComponent');
  console.log('Returning from SignUpComponent');
  console.log('Returning from SignUpComponent');
  return <div className={styles.signUpContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>{getText('SignUpComponent.js_7_U2lnbi')}</h1>
                <form onSubmit={handleSignUp} className={styles.signUpForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("SignUpComponent.js_5_ZW1haW")} className={styles.label}>{getText('SignUpComponent.js_5_RW1haW')}</label>
                        <input type={getText("SignUpComponent.js_5_ZW1haW")} id={getText("SignUpComponent.js_5_ZW1haW")} value={email} onChange={e => setEmail(e.target.value)} required className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor={getText("SignUpComponent.js_8_cGFzc3")} className={styles.label}>{getText('SignUpComponent.js_8_UGFzc3')}</label>
                        <input type={getText("SignUpComponent.js_8_cGFzc3")} id={getText("SignUpComponent.js_8_cGFzc3")} value={password} onChange={e => setPassword(e.target.value)} required className={styles.input} />
                    </div>
                    <button type={getText("SignUpComponent.js_6_c3VibW")} className={styles.submitButton}>{getText('SignUpComponent.js_7_U2lnbi')}</button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                <div className={styles.orSeparator}>{getText('SignUpComponent.js_2_T1I=')}</div>
                <div className={styles.signUpOptions}>
                    <button onClick={handleGoogleSignIn} className={`${styles.signUpButton} ${styles.googleButton}`}>
                        <img src={getText("SignUpComponent.js_65_L2ltYW")} alt={getText("SignUpComponent.js_11_R29vZ2")} className={styles.icon} />{getText('SignUpComponent.js_19_U2lnbi')}</button>
                    <button onClick={handleGitHubSignIn} className={`${styles.signUpButton} ${styles.githubButton}`}>
                        <img src={getText("SignUpComponent.js_55_L2ltYW")} alt={getText("SignUpComponent.js_11_R2l0SH")} className={styles.icon} />{getText('SignUpComponent.js_19_U2lnbi')}</button>
                    <button onClick={handleTwitterSignIn} className={`${styles.signUpButton} ${styles.twitterButton}`}>
                        <img src={getText("SignUpComponent.js_56_L2ltYW")} alt={getText("SignUpComponent.js_12_VHdpdH")} className={styles.icon} />{getText('SignUpComponent.js_20_U2lnbi')}</button>
                </div>
                <div className={styles.signInPrompt}>
                    <p>{getText('SignUpComponent.js_13_QWxyZW')}</p>
                    <button onClick={handleSignInRedirect} className={styles.signInButton}>{getText('SignUpComponent.js_7_U2lnbi')}</button>
                </div>
            </div>
        </div>;
};
export default SignUpComponent;