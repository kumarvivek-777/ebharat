// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAANrZPtnkc21kLcJsz7N1I2o7aD71SdBc",
  authDomain: "eccom-fbbb9.firebaseapp.com",
  projectId: "eccom-fbbb9",
  storageBucket: "eccom-fbbb9.appspot.com",
  messagingSenderId: "490402118740",
  appId: "1:490402118740:web:02406e3d2015c6b18541c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;