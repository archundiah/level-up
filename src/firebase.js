// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHt_A7d1eOVfzpnoq4bYe5HFMi1i1bqbM",
  authDomain: "levelup-64ab7.firebaseapp.com",
  projectId: "levelup-64ab7",
  storageBucket: "levelup-64ab7.appspot.com",
  messagingSenderId: "534444715601",
  appId: "1:534444715601:web:42a89c27f8ec10936c1270"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getFirestore()