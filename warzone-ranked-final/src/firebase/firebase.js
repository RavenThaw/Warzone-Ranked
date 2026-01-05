
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7EVcT03yFwEa6267jdFmwSPWL7VnFo-Y",
  authDomain: "warzone-ranked.firebaseapp.com",
  projectId: "warzone-ranked",
  storageBucket: "warzone-ranked.firebasestorage.app",
  messagingSenderId: "902275504264",
  appId: "1:902275504264:web:a38f0d4b67ba8c8069273d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
