import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJObSvSeE4j1F8IaQwQZPjVAM-baS4Fr4",
  authDomain: "crwn-db-6aaed.firebaseapp.com",
  databaseURL: "https://crwn-db-6aaed.firebaseio.com",
  projectId: "crwn-db-6aaed",
  storageBucket: "crwn-db-6aaed.appspot.com",
  messagingSenderId: "533973668352",
  appId: "1:533973668352:web:902c2beb6071777345bee5",
  measurementId: "G-ZE844DBJPQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

