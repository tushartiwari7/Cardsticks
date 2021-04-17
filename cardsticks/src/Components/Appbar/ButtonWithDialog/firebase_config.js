import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBCjODCUjZmJBqzqzvkQQjwV2z7FOo6D-M",
    authDomain: "cardsticks.firebaseapp.com",
    projectId: "cardsticks",
    storageBucket: "cardsticks.appspot.com",
    messagingSenderId: "987363942616",
    appId: "1:987363942616:web:509b976eb85089e591b7ad",
    measurementId: "G-ZMZMSN8HDM"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db };