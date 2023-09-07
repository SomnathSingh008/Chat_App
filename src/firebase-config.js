// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMadQMFLf7rwL70scR3fcza7_Zh5c8i8",
  authDomain: "chatapp-19438.firebaseapp.com",
  projectId: "chatapp-19438",
  storageBucket: "chatapp-19438.appspot.com",
  messagingSenderId: "101910216110",
  appId: "1:101910216110:web:2ebff62c8cd4b3a4db1c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);