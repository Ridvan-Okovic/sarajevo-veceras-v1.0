import React from 'react';

const AuthContext = React.createContext({
  currentUserData: {},
  authenticateWithPopUp: () => {},
});

export default AuthContext;
