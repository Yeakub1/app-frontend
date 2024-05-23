import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7HMKjOrZ3R3LOZbGQEI11c-or1FJHhIA",
    authDomain: "wapp-eca53.firebaseapp.com",
    projectId: "wapp-eca53",
    storageBucket: "wapp-eca53.appspot.com",
    messagingSenderId: "561272908549",
    appId: "1:561272908549:web:2cdc16c6347711f980656c",
    measurementId: "G-BV6KX6RJ94"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);