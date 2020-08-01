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

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

const storage = firebase.storage();
const db = firebase.firestore();

export { storage, db, timeStamp };
