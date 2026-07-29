// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhgakm0_72AORa_0TRoUUaItPWOU7svYQ",
  authDomain: "ai-project-team-finder-web.firebaseapp.com",
  projectId: "ai-project-team-finder-web",
  storageBucket: "ai-project-team-finder-web.firebasestorage.app",
  messagingSenderId: "260308706953",
  appId: "1:260308706953:web:84786b2e71a74f266d4858",
  measurementId: "G-MQQSSC8PFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
