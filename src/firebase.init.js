// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRQ9AgcQRpO89c4DLvx8hHUmWU6th45sE",
    authDomain: "dev-todo-d7ef4.firebaseapp.com",
    projectId: "dev-todo-d7ef4",
    storageBucket: "dev-todo-d7ef4.appspot.com",
    messagingSenderId: "832454834667",
    appId: "1:832454834667:web:c3ab7807fe617dca1741ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;