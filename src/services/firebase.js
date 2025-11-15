// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSO8SOx5rONYw4blXrjeHKzKXh5zlJxs0",
  authDomain: "farmaven-6cf80.firebaseapp.com",
  projectId: "farmaven-6cf80",
  storageBucket: "farmaven-6cf80.firebasestorage.app",
  messagingSenderId: "887692272340",
  appId: "1:887692272340:web:96a59eae7fb47ca0c65141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db  = getFirestore(app);