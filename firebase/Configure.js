// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3-p20mjo6cmFnADYqkcv3Ee6JqGJ9JQ",
  authDomain: "nativeappofrivu.firebaseapp.com",
  databaseURL: "https://nativeappofrivu-default-rtdb.firebaseio.com",
  projectId: "nativeappofrivu",
  storageBucket: "nativeappofrivu.appspot.com",
  messagingSenderId: "351969874463",
  appId: "1:351969874463:web:d8b1a2b27ba3e6c9a97b2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// export const auth = getAuth();
export { db };

