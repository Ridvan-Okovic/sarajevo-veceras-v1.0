import React from 'react';

const AuthContext = React.createContext({
  currentUserData: {},
  admin: Boolean,
  loginSuccess: Boolean,
  authenticate: () => {},
  googleAuth: () => {},
});

export default AuthContext;
