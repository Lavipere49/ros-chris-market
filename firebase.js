mport { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_LMb8fT4C3TgGnQUBD5UZDTI6nI5be9c",
  authDomain: "roschris-market-ba898.firebaseapp.com",
  projectId: "roschris-market-ba898",
  storageBucket: "roschris-market-ba898.firebasestorage.app",
  messagingSenderId: "937555771393",
  appId: "1:937555771393:web:aa8d80c81e268b35134000",
  measurementId: "G-NN3PGNX8XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);