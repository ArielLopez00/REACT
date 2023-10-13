import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkPSe_vhMu42CMRS6ECpRBcIppD9vRd2Q",
  authDomain: "coder-react-c9c9f.firebaseapp.com",
  projectId: "coder-react-c9c9f",
  storageBucket: "coder-react-c9c9f.appspot.com",
  messagingSenderId: "549387680223",
  appId: "1:549387680223:web:2de526b52da693bf956c6a"
};

initializeApp(firebaseConfig);  

export const db = getFirestore();

export const orderCollections = collection(db,'orders')