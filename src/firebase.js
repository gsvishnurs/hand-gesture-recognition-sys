import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkzSPKasMUK-RKxNfrbjOMg1GlxbLekA4",
  authDomain: "hand-gesture-recognition-sys.firebaseapp.com",
  projectId: "hand-gesture-recognition-sys",
  storageBucket: "hand-gesture-recognition-sys.appspot.com",
  messagingSenderId: "732916327658",
  appId: "1:732916327658:web:20dce42fd0897aac2e6393"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

