import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVXacJsfIPhzPC20CEVU0eD7rCUKgyrK0",
    authDomain: "ecommerce-miguelfarias58160.firebaseapp.com",
    projectId: "ecommerce-miguelfarias58160",
    storageBucket: "ecommerce-miguelfarias58160.appspot.com",
    messagingSenderId: "1070373226164",
    appId: "1:1070373226164:web:3ceb4fc7845604df4739e1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
