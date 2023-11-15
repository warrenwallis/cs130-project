// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbA4rJtlxZClUn_4S6vQughQq7_xLUHeI",
  authDomain: "cs130-project-b290a.firebaseapp.com",
  projectId: "cs130-project-b290a",
  storageBucket: "cs130-project-b290a.appspot.com",
  messagingSenderId: "491621529705",
  appId: "1:491621529705:web:3237517399b240a3b0caf8",
  measurementId: "G-B3V91GR379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);