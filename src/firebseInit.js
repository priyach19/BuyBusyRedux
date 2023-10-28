// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ9c3BxXnMk0WSYP3VjccImhFk7ievDpE",
  authDomain: "buybusy2-86ac1.firebaseapp.com",
  projectId: "buybusy2-86ac1",
  storageBucket: "buybusy2-86ac1.appspot.com",
  messagingSenderId: "893269399068",
  appId: "1:893269399068:web:c89dc6c8599c879403b1d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);