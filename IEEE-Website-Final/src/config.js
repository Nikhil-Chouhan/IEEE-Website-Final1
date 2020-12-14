import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsRvj6DYYfUgmYCXmWKQXBZaQwH6XmdG8",
    authDomain: "ieee-website-f4149.firebaseapp.com",
    databaseURL: "https://ieee-website-f4149.firebaseio.com",
    projectId: "ieee-website-f4149",
    storageBucket: "ieee-website-f4149.appspot.com",
    messagingSenderId: "297422037951",
    appId: "1:297422037951:web:d6cd4b938f4ada46f0b70a",
    measurementId: "G-45Q3142VXS"
});

export const storage = firebaseApp.storage();
export const firestore = firebaseApp.firestore();
