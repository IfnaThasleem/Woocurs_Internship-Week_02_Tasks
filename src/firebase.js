// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import { getAuth } from "firebase/auth";  

// Your Firebase config (paste from console)
const firebaseConfig = {
    apiKey: "AIzaSyCppoFeZCJb8EZ2sHTZawE7w5xuMPlfRkU",
    authDomain: "student-management-dc5ea.firebaseapp.com",
    projectId: "student-management-dc5ea",
    storageBucket: "student-management-dc5ea.firebasestorage.app",
    messagingSenderId: "624856258118",
    appId: "1:624856258118:web:08707b238756323aa09c47",
    measurementId: "G-FFFNJTYFWS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);



