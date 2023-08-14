// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxOEwWQj2L0Bfp7mqnplMc7cwSGiKrUd0",
  authDomain: "white-sauce.firebaseapp.com",
  projectId: "white-sauce",
  storageBucket: "white-sauce.appspot.com",
  messagingSenderId: "411081531215",
  appId: "1:411081531215:web:e3ea4c54460f4e5927ef3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
