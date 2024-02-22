// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEGB0KH_VkSRmmn_4O2zITSmaJzTBBl30",
  authDomain: "netflixgpt-73c91.firebaseapp.com",
  projectId: "netflixgpt-73c91",
  storageBucket: "netflixgpt-73c91.appspot.com",
  messagingSenderId: "527905727650",
  appId: "1:527905727650:web:adb952be8df9141b5ae3fb",
  measurementId: "G-J9H0TMCHSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();