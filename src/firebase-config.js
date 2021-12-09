import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDpvB0j3zQ2rPLnwHmOCRmVfHIxH8H8D0c",
    authDomain: "filter-9fa5a.firebaseapp.com",
    projectId: "filter-9fa5a",
    storageBucket: "filter-9fa5a.appspot.com",
    messagingSenderId: "409109400603",
    appId: "1:409109400603:web:93b369f62af8e52be43cbe",
    measurementId: "${config.measurementId}"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
