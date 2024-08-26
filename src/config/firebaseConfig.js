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
  apiKey: "AIzaSyCwsZtlsKYbLBqQSsrnWss6r0kncfhJy7s",
  authDomain: "worktwins-87df2.firebaseapp.com",
  projectId: "worktwins-87df2",
  storageBucket: "worktwins-87df2.appspot.com",
  messagingSenderId: "429257469666",
  appId: "1:429257469666:web:42cfd7ab4d388057e4b8bb",
  measurementId: "G-6PE2RZFVGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const linkedinProvider = new OAuthProvider('linkedin.com');

export { auth, googleProvider, githubProvider, linkedinProvider };
