import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_QYml1Pd_v58vPAoEtRZTUIjpC9Ni1LM",
  authDomain: "class-calculator-1d3ed.firebaseapp.com",
  projectId: "class-calculator-1d3ed",
  storageBucket: "class-calculator-1d3ed.appspot.com",
  messagingSenderId: "433834062393",
  appId: "1:433834062393:web:ddf6bf6382c2188d5093e8",
  measurementId: "G-VRK8MTC7NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);