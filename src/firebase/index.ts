// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB15E6e1uor3OMb_S7q42quEcaZVGL8BYo",
  authDomain: "strapi-admin98.firebaseapp.com",
  projectId: "strapi-admin98",
  storageBucket: "strapi-admin98.appspot.com",
  messagingSenderId: "693351392178",
  appId: "1:693351392178:web:75cd14dacc733473e7baab",
  measurementId: "G-BPLFCYYH95",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
