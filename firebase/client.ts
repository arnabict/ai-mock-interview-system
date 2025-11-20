// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfjHS2Sd7mu3Wp_Isf1AXWUwpYtor5iMo",
  authDomain: "prepwise-1507c.firebaseapp.com",
  projectId: "prepwise-1507c",
  storageBucket: "prepwise-1507c.firebasestorage.app",
  messagingSenderId: "24069924544",
  appId: "1:24069924544:web:49f8197c582d123a01ef25",
  measurementId: "G-NXHK1ZPFKL",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
