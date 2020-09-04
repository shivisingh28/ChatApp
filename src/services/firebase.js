//import React from 'react';
import  firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCCgKJETvgDay_ZcqyPAvVWiEn0XuDGp30",
    authDomain: "webapp-a8591.firebaseapp.com",
    databaseURL: "https://webapp-a8591.firebaseio.com",
    projectId: "webapp-a8591",
    storageBucket: "webapp-a8591.appspot.com",
    messagingSenderId: "1025999118476",
    appId: "1:1025999118476:web:f778381745dc00cea21ba9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;