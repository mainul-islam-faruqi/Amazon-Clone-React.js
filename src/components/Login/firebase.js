import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyANpu65us9NXsL7zS23vslXeuSCmRb4ikI",
    authDomain: "ema-jhon-22188.firebaseapp.com",
    databaseURL: "https://ema-jhon-22188.firebaseio.com",
    projectId: "ema-jhon-22188",
    storageBucket: "ema-jhon-22188.appspot.com",
    messagingSenderId: "403410267991",
    appId: "1:403410267991:web:0cea1250dcb667442e1812",
    measurementId: "G-MH9BLSTEMM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};