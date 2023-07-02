import React from 'react';

const ThemeContext = React.createContext({
  theme: String,
  setTheme: () => {},
});

export default ThemeContext;
