import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9UULWgAoK0YIp1q3khnZZ6qzqEliAuy0",
  authDomain: "netflix-clone-71057.firebaseapp.com",
  projectId: "netflix-clone-71057",
  storageBucket: "netflix-clone-71057.firebasestorage.app",
  messagingSenderId: "1004249499824",
  appId: "1:1004249499824:web:6bd50e04687d761b0ad375",
  measurementId: "G-RWP2CTH2RE"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
