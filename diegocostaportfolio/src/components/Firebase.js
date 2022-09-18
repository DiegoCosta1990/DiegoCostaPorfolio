import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcp8r_s69j9j3VzxONKDNBGulgMcKQqPc",
    authDomain: "diegocostaportfolio.firebaseapp.com",
    databaseURL: "https://diegocostaportfolio.firebaseio.com",
    projectId: "diegocostaportfolio",
    storageBucket: "diegocostaportfolio.appspot.com",
    messagingSenderId: "565510551001",
    appId: "1:565510551001:web:e23b57cbf015a04c3f95c8",
    measurementId: "G-ZLKH9R1XFM"
});

var db = firebaseApp.firestore();


export { db };
