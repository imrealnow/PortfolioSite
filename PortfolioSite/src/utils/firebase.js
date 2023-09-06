import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
	apiKey: "AIzaSyDNIuFB0XFkuADobMTEMQj9jXDM9hwHg64",
	authDomain: "portfoliowebsite-94789.firebaseapp.com",
	projectId: "portfoliowebsite-94789",
	storageBucket: "portfoliowebsite-94789.appspot.com",
	messagingSenderId: "2790600955",
	appId: "1:2790600955:web:49b8751f9203e66cc7405e",
	measurementId: "G-8EYKQN23FN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);
const googleAuthProvider = new GoogleAuthProvider();
const emailAuthProvider = new EmailAuthProvider();

export { auth, db, storage, functions, googleAuthProvider, emailAuthProvider };
