import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAxxUuoUmAU3vOhKlQAOTY-yLCQQn5RFLM",
  authDomain: "prepwise-91774.firebaseapp.com",
  projectId: "prepwise-91774",
  storageBucket: "prepwise-91774.firebasestorage.app",
  messagingSenderId: "494658483275",
  appId: "1:494658483275:web:6341f62c019aba936b89ce",
  measurementId: "G-TCQHTXB26S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
