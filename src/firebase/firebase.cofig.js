// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfgCaqsu8sNdnIGkBE1LW9eKvmzHywXcs",
    authDomain: "hms-shop.firebaseapp.com",
    projectId: "hms-shop",
    storageBucket: "hms-shop.appspot.com",
    messagingSenderId: "323020429564",
    appId: "1:323020429564:web:9226e2d91a1babed7bdf79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);