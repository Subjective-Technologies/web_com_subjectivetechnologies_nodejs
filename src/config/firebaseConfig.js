import { getText } from '../utils/getText.js';
console.log('Loading firebaseConfig.js');
// src/config/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getText("firebaseConfig.js_39_QUl6YV"),
  authDomain: getText("firebaseConfig.js_31_d29ya3"),
  projectId: getText("firebaseConfig.js_15_d29ya3"),
  storageBucket: getText("firebaseConfig.js_27_d29ya3"),
  messagingSenderId: getText("firebaseConfig.js_12_NDI5Mj"),
  appId: getText("firebaseConfig.js_41_MTo0Mj"),
  measurementId: getText("firebaseConfig.js_12_Ry02UE")
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const linkedinProvider = new OAuthProvider('linkedin.com');
export { auth, googleProvider, githubProvider, linkedinProvider };