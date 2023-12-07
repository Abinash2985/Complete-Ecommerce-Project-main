// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkZORyvzupPkxsG5QkWoYbKN2i7lIt2jA",
  authDomain: "myfirstapp-71f14.firebaseapp.com",
  projectId: "myfirstapp-71f14",
  storageBucket: "myfirstapp-71f14.appspot.com",
  messagingSenderId: "710350904426",
  appId: "1:710350904426:web:33a17b84b72c22de86fe13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}