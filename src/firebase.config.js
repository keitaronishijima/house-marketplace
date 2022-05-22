import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvxHvGMLdHELmS8xSQyncbAcrgz6nl3Pk",
  authDomain: "house-marketplace-app-1a67c.firebaseapp.com",
  projectId: "house-marketplace-app-1a67c",
  storageBucket: "house-marketplace-app-1a67c.appspot.com",
  messagingSenderId: "830195711110",
  appId: "1:830195711110:web:2f421e0ee54e4e31d42507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();