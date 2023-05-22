// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkYodhxj7AXH3R0Cs0adujDgVr19wmU7M",
    authDomain: "dragon-news-78a1e.firebaseapp.com",
    projectId: "dragon-news-78a1e",
    storageBucket: "dragon-news-78a1e.appspot.com",
    messagingSenderId: "87426375082",
    appId: "1:87426375082:web:b2b3443899c1f92211dfd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;