import firebase from "firebase/app";
import "firebase/storage"
import "firebase/database"
import "firebase/app-check"


// firebase config, do not manually modify this
const firebaseConfig = {};  // insert this

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