import { getText } from '../utils/getText.js';
console.log('Loading firebaseConfig.js');
// src/config/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: getText("firebaseConfig.js_39_QUl6YV"),
  authDomain: getText("firebaseConfig.js_44_c3Viam"),
  projectId: getText("firebaseConfig.js_28_c3Viam"),
  storageBucket: getText("firebaseConfig.js_40_c3Viam"),
  messagingSenderId: getText("firebaseConfig.js_12_MzYzMD"),
  appId: getText("firebaseConfig.js_41_MTozNj"),
  measurementId: getText("firebaseConfig.js_12_Ry1NM0")
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const linkedinProvider = new OAuthProvider('linkedin.com');
export { auth, googleProvider, githubProvider, linkedinProvider };