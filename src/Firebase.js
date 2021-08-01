import firebase from "firebase/app";
import "firebase/storage"
import "firebase/database"
import "firebase/app-check"


// firebase config, do not manually modify this
const firebaseConfig = {
  apiKey: "AIzaSyDPhozaIlHvGrw6iIMUgm8aZMgoYzi0CuM",
  authDomain: "syncontour-9171a.firebaseapp.com",
  databaseURL: "https://syncontour-9171a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "syncontour-9171a",
  storageBucket: "syncontour-9171a.appspot.com",
  messagingSenderId: "11782322264",
  appId: "1:11782322264:web:ae15c5741d8a8c43dbf22d",
  measurementId: "G-KVBRKH7J97"
};

// Initialize Firebase
const myFirebase = firebase.initializeApp(firebaseConfig);

// app check
const appCheck = firebase.appCheck();
appCheck.activate('6LdV-sQbAAAAAIc0Bh5HacucsCzr8Hhn5pU9J2TG', true)

// Initialise Realtime Database for playlist
let myDatabase = myFirebase.database();
let databaseRef = myDatabase.ref();

// Initialise Storage, create root reference for audio files
let storage = myFirebase.storage();
let storageRef = storage.ref();


export {databaseRef, storageRef};