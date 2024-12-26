
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyA1h_F8THVKdhMgD2DHiH2h-XIWTZi9PUY",
  authDomain: "chill-app-df977.firebaseapp.com",
  projectId: "chill-app-df977",
  storageBucket: "chill-app-df977.appspot.com",
  messagingSenderId: "1067941346563",
  appId: "1:1067941346563:web:fbc545ebb92326a7293d36"
};

const appFirebase = initializeApp(firebaseConfig, '[APP_FIREBASE');
const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const signup = async (username, password, confirmPassword) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, username, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            username,
            password,
            authProvider: "local",
            
        });
    } catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const login = async (email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {appFirebase, auth, db, signup, login, logout};