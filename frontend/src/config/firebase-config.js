// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, EmailAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKkxRA7r4CInWv-U2R2QBUlY_YWSlGk3w',
  authDomain: 'sarajevo-veceras.firebaseapp.com',
  databaseURL:
    'https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'sarajevo-veceras',
  storageBucket: 'sarajevo-veceras.appspot.com',
  messagingSenderId: '603926208665',
  appId: '1:603926208665:web:ffb97f2ef3316a2dae1808',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const emailProvider = new EmailAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
