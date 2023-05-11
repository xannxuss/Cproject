import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS99lccLgKyT3nW1621mYznbNcbLD9wFo",
  authDomain: "markdown-pro.firebaseapp.com",
  projectId: "markdown-pro",
  storageBucket: "markdown-pro.appspot.com",
  messagingSenderId: "1032957437951",
  appId: "1:1032957437951:web:d310bed6256f29688569ca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
