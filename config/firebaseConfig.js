// src/config/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLUW37pI2Hp2yTZXbJOXLFtV_5XrsPKwU",
    authDomain: "subjectivetechnologies-login.firebaseapp.com",
    projectId: "subjectivetechnologies-login",
    storageBucket: "subjectivetechnologies-login.appspot.com",
    messagingSenderId: "363070822103",
    appId: "1:363070822103:web:82d4304d8779f8a0670292",
    measurementId: "G-M3C1T7XDRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const linkedinProvider = new OAuthProvider('linkedin.com');

export { auth, googleProvider, githubProvider, linkedinProvider };
