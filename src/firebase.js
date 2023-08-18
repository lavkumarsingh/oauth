import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADFSoaXmZ6cFt5SHGmnexxOenuuxS2JfQ",
  authDomain: "oauth-d1c30.firebaseapp.com",
  projectId: "oauth-d1c30",
  storageBucket: "oauth-d1c30.appspot.com",
  messagingSenderId: "61131470081",
  appId: "1:61131470081:web:569fd5829664d635809700",
  measurementId: "G-7586PRZ79L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const userData = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      token: user.accessToken,
      avatar: user.photoURL
    }
    console.log(userData);
    return userData;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  localStorage.clear('userData');
  signOut(auth);
};
export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  logout,
};