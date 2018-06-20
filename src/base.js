import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEB0PUtRQfnKnnWurjS25m-tZLmHs_i7g",
  authDomain: "flats-list.firebaseapp.com",
  databaseURL: "https://flats-list.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
