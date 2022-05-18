// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVst9Bm_iUJbI3-kByr_kMyDf_igAgyV4",
    authDomain: "dev-todo-d014a.firebaseapp.com",
    projectId: "dev-todo-d014a",
    storageBucket: "dev-todo-d014a.appspot.com",
    messagingSenderId: "1090356580835",
    appId: "1:1090356580835:web:dbc33141bc853caa6f50d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;