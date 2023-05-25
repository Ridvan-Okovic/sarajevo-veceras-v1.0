import React from 'react';
import NavBar from '../Layout/NavBar';

const Error = () => {
  return (
    <main className="relative min-h-screen overflow-clip bg-[#121212] pb-8 font-manrope">
      <NavBar />

      <h1 className="mt-8 mb-8 text-center font-montserrat text-3xl font-normal tracking-wide text-[#e1e1e1] sm:text-4xl md:mt-16 md:text-5xl">
        Could not find page!
      </h1>
    </main>
  );
};

export default Error;
