import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD7nEeu7N9GFJPX-KMWbKnFuihtKxQ0dsE",
    authDomain: "soulsociety-af229.firebaseapp.com",
    projectId: "soulsociety-af229",
    storageBucket: "soulsociety-af229.appspot.com",
    messagingSenderId: "560979310019",
    appId: "1:560979310019:web:a6405ae090e95cfacb7976"
}).auth();