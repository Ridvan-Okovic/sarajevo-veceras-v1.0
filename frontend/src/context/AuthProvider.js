import { useState } from 'react';
import { auth } from '../config/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [success, setSuccess] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  });

  const authenticate = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        console.log(res);
        setCurrentUser(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authContext = {
    currentUserData: currentUser,
    authenticate,
    success,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
