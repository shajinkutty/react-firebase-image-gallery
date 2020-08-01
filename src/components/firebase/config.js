import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMIN",
  databaseURL: "XXXXXX",
  projectId: "XXXXX",
  storageBucket: "XXXXXX",
  messagingSenderId: "XXXXXX",
  appId: "XXXXXXXXXXXXXXXXX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//server timestamp
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

const storage = firebase.storage(); //initilize firebase storage
const db = firebase.firestore(); //initilize firestore database

export { storage, db, timeStamp };
