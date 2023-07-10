import { useState } from 'react';

import ThemeContext from './theme-context';

const initialTheme = localStorage.getItem('theme') || 'dark';

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(initialTheme);

  const themeContext = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
