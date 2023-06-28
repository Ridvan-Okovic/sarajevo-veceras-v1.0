import { useState } from 'react';
import { auth } from '../config/firebase-config';
import { googleProvider } from '../config/firebase-config';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';

import AuthContext from './auth-context';
import { createUser } from '../utils/create-user';

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [admin, setAdmin] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
      return;
    }
  });

  const authenticate = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        setAdmin(true);
        const newUser = { name: res.user.email, role: 'author' };
        createUser(res.user.uid, newUser);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const googleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAdmin(false);
        const newUser = { name: res.user.displayName, role: 'viewer' };
        createUser(res.user.uid, newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authContext = {
    currentUserData: currentUser,
    authenticate,
    googleAuth,
    admin,
    loginSuccess,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
