// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgax2G9rEvG58EGUqEkVuyhRvPyb0dH5o",
  authDomain: "expense-tracker-264a9.firebaseapp.com",
  projectId: "expense-tracker-264a9",
  storageBucket: "expense-tracker-264a9.appspot.com",
  messagingSenderId: "591038586886",
  appId: "1:591038586886:web:326356f3a04b9f9199a387",
  measurementId: "G-NE6RQSRGGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app);