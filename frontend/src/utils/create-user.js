import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase-config';

export const createUser = async (uid, user) => {
  try {
    await addDoc(collection(db, 'users'), {
      uid: uid,
      user: user,
      role: 'viewer',
    });
  } catch (error) {
    console.log(error);
  }
};
