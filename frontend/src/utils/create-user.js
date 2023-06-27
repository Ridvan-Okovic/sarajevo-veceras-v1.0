import { collection } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { doc, setDoc } from 'firebase/firestore/lite';

const collectionRef = collection(db, 'users');

console.log(collectionRef);

export const createUser = async (uid, user) => {
  try {
    const userRef = doc(collectionRef, uid);
    await setDoc(userRef, user);
  } catch (error) {
    //console.log(error);
  }
};
