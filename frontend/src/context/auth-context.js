import React from 'react';

const AuthContext = React.createContext({
  currentUserData: {},
  success: Boolean,
  authenticate: () => {},
});

export default AuthContext;
