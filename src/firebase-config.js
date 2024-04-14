// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKLdb3ZodUJ-eLnfaDLEJDex2KQx7tDcM",
  authDomain: "postratdojo-144cf.firebaseapp.com",
  projectId: "postratdojo-144cf",
  storageBucket: "postratdojo-144cf.appspot.com",
  messagingSenderId: "129813062624",
  appId: "1:129813062624:web:1012f58c176b19c7004185",
  measurementId: "G-9TVLMV18G5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore Database
const db = getFirestore(app);

export { db };
