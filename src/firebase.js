
import firebase from "firebase";
import "firebase/storage"
import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAGceT-eGcF9ha_w6Wc6EEAv7TmmoQUx4Q",
  authDomain: "disney-clone-app-7556f.firebaseapp.com",
  projectId: "disney-clone-app-7556f",
  storageBucket: "disney-clone-app-7556f.appspot.com",
  messagingSenderId: "937785631190",
  appId: "1:937785631190:web:82a6cb88d1c32aabdc8477",
  measurementId: "G-D5QSX23SDN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;