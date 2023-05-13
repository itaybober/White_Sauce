// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHQL0stjL1kDO-MuEcMJ-OzCKNEgJD9-o",
    authDomain: "step-tst.firebaseapp.com",
    projectId: "step-tst",
    storageBucket: "step-tst.appspot.com",
    messagingSenderId: "139671724571",
    appId: "1:139671724571:web:2afd04eba8f7da58984ebe",
    measurementId: "G-DJEEPQ8Y9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app)