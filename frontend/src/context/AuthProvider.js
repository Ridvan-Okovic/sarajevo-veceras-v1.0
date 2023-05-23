import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase-config';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
  });

  const authenticateWithPopUp = () => {
    signInWithPopup(auth, googleProvider)
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
    authenticateWithPopUp,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
