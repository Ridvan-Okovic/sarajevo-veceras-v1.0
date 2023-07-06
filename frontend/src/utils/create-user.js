import { db } from '../config/firebase-config';
import { setDoc, doc } from 'firebase/firestore';

export const createUser = async (uid, user) => {
  try {
    await setDoc(doc(db, 'users', uid), { user });
  } catch (error) {
    console.log(error);
  }
};
