// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEPHkX4uftibXa0PwwfoV6QRdr_Z16Atk",
  authDomain: "clone-7a943.firebaseapp.com",
  databaseURL: "https://clone-7a943.firebaseio.com",
  projectId: "clone-7a943",
  storageBucket: "clone-7a943.appspot.com",
  messagingSenderId: "619717918814",
  appId: "1:619717918814:web:2fd1b3c90483baf573b4cf",
  measurementId: "G-TLYSB26S23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
