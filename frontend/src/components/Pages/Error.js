import React, { useContext } from 'react';
import NavBar from '../Layout/NavBar';
import ThemeContext from '../../context/theme-context';

const Error = () => {
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

      <h1
        className={`mt-8 mb-8 text-center font-montserrat text-3xl font-normal tracking-wide sm:text-4xl md:mt-16 md:text-5xl ${
          theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
        }`}
      >
        Could not find page!
      </h1>
    </main>
  );
};

export default Error;
