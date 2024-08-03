// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyk3nvfo1XfD_EOub-1L8xIuq39QZxPMo",
  authDomain: "muscle-map-b8a0c.firebaseapp.com",
  projectId: "muscle-map-b8a0c",
  storageBucket: "muscle-map-b8a0c.appspot.com",
  messagingSenderId: "581665156300",
  appId: "1:581665156300:web:a37677c48b62a628706669",
  measurementId: "G-Z1R9QF0YSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);