import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANSFZyOuqFKUo2DcINeBPRcJzGx6Tr5oo",
  authDomain: "firegram-fb1d5.firebaseapp.com",
  databaseURL: "https://firegram-fb1d5.firebaseio.com",
  projectId: "firegram-fb1d5",
  storageBucket: "firegram-fb1d5.appspot.com",
  messagingSenderId: "60420846194",
  appId: "1:60420846194:web:f0b82a0a2c945a029148eb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();

export { storage, db };
