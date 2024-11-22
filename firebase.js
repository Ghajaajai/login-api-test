// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6m6rd1nKmDNmm5DEmHcORqbngh7fB6r8",
  authDomain: "login-register-test-297c9.firebaseapp.com",
  projectId: "login-register-test-297c9",
  storageBucket: "login-register-test-297c9.firebasestorage.app",
  messagingSenderId: "70477070225",
  appId: "1:70477070225:web:c7f15ad14e223d68c12430",
  measurementId: "G-YXCMK7F23T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };