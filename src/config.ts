// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6HotOhnSi9UvTOBbGnBZH7K-sOSLIg1Q",
  authDomain: "chat-app-91345.firebaseapp.com",
  projectId: "chat-app-91345",
  storageBucket: "chat-app-91345.appspot.com",
  messagingSenderId: "954570711917",
  appId: "1:954570711917:web:d1d58c6ecd721505523064",
  measurementId: "G-4MC739MH03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
