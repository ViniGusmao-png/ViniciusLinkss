
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBXy_w_YwkCLyYO81_zQLAg6NyjOUZdBTE",
  authDomain: "reactlinks-e8469.firebaseapp.com",
  projectId: "reactlinks-e8469",
  storageBucket: "reactlinks-e8469.appspot.com",
  messagingSenderId: "242977725429",
  appId: "1:242977725429:web:2f843bca01c65525e65ebc"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db };