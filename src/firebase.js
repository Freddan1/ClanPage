// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHlmPfFJDjmpGNYp55KANV2Kxo5HEJgqM",
  authDomain: "clanprojekt-7cc46.firebaseapp.com",
  projectId: "clanprojekt-7cc46",
  storageBucket: "clanprojekt-7cc46.appspot.com",
  messagingSenderId: "889062427185",
  appId: "1:889062427185:web:7ffb96569b917300a66310",
  measurementId: "G-CYM5HC9L45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
