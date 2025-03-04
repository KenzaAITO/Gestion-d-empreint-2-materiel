// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChS8uSY8SHJ3GuAZIcV-F5HouH8JfRM8o",
  authDomain: "test-securite-tp.firebaseapp.com",
  projectId: "test-securite-tp",
  storageBucket: "test-securite-tp.firebasestorage.app",
  messagingSenderId: "74794869173",
  appId: "1:74794869173:web:2d8d387c06997d4bf4f9fc",
  measurementId: "G-S2W30ZY3C1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, getDoc, collection, query, where, addDoc, getDocs };
