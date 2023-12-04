import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore, doc, addDoc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';


const firebaseConfig = {
	apiKey: 'AIzaSyBbA4rJtlxZClUn_4S6vQughQq7_xLUHeI',
	authDomain: 'cs130-project-b290a.firebaseapp.com',
	projectId: 'cs130-project-b290a',
	storageBucket: 'cs130-project-b290a.appspot.com',
	messagingSenderId: '491621529705',
	appId: '1:491621529705:web:3237517399b240a3b0caf8',
	measurementId: 'G-B3V91GR379',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth(app);
const db = firestore;

export { collection, auth, firestore, app, db, doc, addDoc, setDoc, getDoc, serverTimestamp };
