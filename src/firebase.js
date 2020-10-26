import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC3CvvsB7H-NtuYGqkq4z7RVzdTlcYEBUc",
    authDomain: "smartq-c60fb.firebaseapp.com",
    databaseURL: "https://smartq-c60fb.firebaseio.com",
    projectId: "smartq-c60fb",
    storageBucket: "smartq-c60fb.appspot.com",
    messagingSenderId: "575381802341",
    appId: "1:575381802341:web:f642f3e587530c1fba258c",
    measurementId: "G-CDM6TQNXBC"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;