import { useContext, useEffect, useState } from 'react';
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
import LikedContext from './liked-context';

const AuthProvider = (props) => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [role, setRole] = useState('');
  const { setLikedEvents } = useContext(LikedContext);

  function removeUser() {
    localStorage.removeItem('role');
    localStorage.removeItem('uid');
    setLikedEvents([]);
    setRole('');
    return;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        removeUser();
        setLoginSuccess(false);
      } else {
        setLoginSuccess(true);
        getDoc(doc(db, 'users', currentUser.uid)).then((docSnap) => {
          if (docSnap.exists()) {
            localStorage.setItem('role', docSnap.data().user.role);
            localStorage.setItem('uid', auth.currentUser.uid);
            setRole(docSnap.data().user.role);
            if (docSnap.data().likedEvents) {
              setLikedEvents(docSnap.data().likedEvents);
            } else {
              setLikedEvents([]);
            }
          } else {
            console.log('No such document');
          }
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
