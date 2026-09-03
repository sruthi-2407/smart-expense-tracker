import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyBcGCAvrEauADL9usNuiAEipfXOTD73Qa0",

    authDomain: "smart-expense-tracker-we-8c8cb.firebaseapp.com",

    projectId: "smart-expense-tracker-we-8c8cb",

    storageBucket: "smart-expense-tracker-we-8c8cb.firebasestorage.app",

    messagingSenderId: "1061743258321",

    appId: "1:1061743258321:web:9d07385cdfe8a6b554f3f0",

    measurementId: "G-M7BQ8TNVK5"

};


const app = initializeApp(firebaseConfig);


export const auth =
    getAuth(app);


export const db =
    getFirestore(app);