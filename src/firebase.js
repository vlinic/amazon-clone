import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqcu38rKZUHY3_VlvlQtTYTbhPjxc9TvM",
  authDomain: "clone-1fcf1.firebaseapp.com",
  databaseURL: "https://clone-1fcf1.firebaseio.com",
  projectId: "clone-1fcf1",
  storageBucket: "clone-1fcf1.appspot.com",
  messagingSenderId: "123470143563",
  appId: "1:123470143563:web:5a758f729456a8478bedce",
  measurementId: "G-DLZD5KFB76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
