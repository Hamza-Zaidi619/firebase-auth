import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcuGi9RtV4T12DqOptTN5sgzGkwumc774",
  authDomain: "fmpproject-50953.firebaseapp.com",
  projectId: "fmpproject-50953",
  storageBucket: "fmpproject-50953.appspot.com",
  messagingSenderId: "242614977403",
  appId: "1:242614977403:web:a313b2eff665e0904f33de",
  measurementId: "G-ZM2NH94ZYX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
