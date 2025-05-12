// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPbEunOLHDzlIi5VDN7kp6RaNrRezv25M",
  authDomain: "appfibonatix.firebaseapp.com",
  projectId: "appfibonatix",
  storageBucket: "appfibonatix.firebasestorage.app",
  messagingSenderId: "538060749315",
  appId: "1:538060749315:web:f3ac103bd47bed8aa52c36",
  measurementId: "G-KH1EELFHCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


