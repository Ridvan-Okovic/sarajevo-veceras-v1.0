import { useEffect, useState } from 'react';
import { auth } from '../config/firebase-config';
import { googleProvider } from '../config/firebase-config';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import AuthContext from './auth-context';
import { createUser } from '../utils/create-user';
import { db } from '../config/firebase-config';

const AuthProvider = (props) => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setLoginSuccess(false);
        localStorage.removeItem('role');
        setRole('');
        return;
      }
      getDoc(doc(db, 'users', currentUser.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          localStorage.setItem('role', docSnap.data().user.role);
          setRole(docSnap.data().user.role);
        } else {
          console.log('No such document');
        }
      });
      setLoginSuccess(true);
    });
  }, []);

  const emailAuth = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        const newUser = {
          name: res.user.email,
          role: 'author',
        };
        createUser(res.user.uid, newUser);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const googleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const newUser = {
          name: res.user.displayName,
          role: 'viewer',
        };
        createUser(res.user.uid, newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authContext = {
    emailAuth,
    loginSuccess,
    googleAuth,
    role,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
