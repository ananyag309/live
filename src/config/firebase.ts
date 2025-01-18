// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJT9JJoMnwTug5D8VuQCsz5XqPA79gh4",
  authDomain: "krishigrow-b07d4.firebaseapp.com",
  projectId: "krishigrow-b07d4",
  storageBucket: "krishigrow-b07d4.appspot.com",
  messagingSenderId: "488901923185",
  appId: "1:488901923185:web:3541f9d090024eb929a6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);