import { Outlet } from 'react-router-dom';

import ThemeContext from '../../context/theme-context';

import NavBar from '../Layout/NavBar';
import { useContext } from 'react';

const RootLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={
        theme === 'dark'
          ? 'relative min-h-screen overflow-clip bg-[#121212] pb-8 font-manrope'
          : 'relative min-h-screen overflow-clip bg-white pb-8 font-manrope'
      }
    >
      <NavBar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
