
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7d8_5WMiGlT8mHn4VVuVxSTS0okmjRio",
  authDomain: "webcarros-69d24.firebaseapp.com",
  projectId: "webcarros-69d24",
  storageBucket: "webcarros-69d24.appspot.com",
  messagingSenderId: "471588382652",
  appId: "1:471588382652:web:c3344e17d723cb1d49adb9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
