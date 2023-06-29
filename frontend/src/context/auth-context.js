import React from 'react';

const AuthContext = React.createContext({
  loginSuccess: Boolean,
  role: {},
  emailAuth: () => {},
  googleAuth: () => {},
});

export default AuthContext;
