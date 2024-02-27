// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4hXzUFNPuGvVFk4XQxJxpr3WBaGV2F9M",
  authDomain: "smatched-testing.firebaseapp.com",
  projectId: "smatched-testing",
  storageBucket: "smatched-testing.appspot.com",
  messagingSenderId: "926196578840",
  appId: "1:926196578840:web:50f80fe18b19862759216d",
  measurementId: "G-QZV34VEC5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);