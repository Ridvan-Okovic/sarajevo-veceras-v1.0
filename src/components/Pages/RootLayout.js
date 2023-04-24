import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../Layout/NavBar';

const RootLayout = () => {
  const [isFilterShown, setIsFilterShown] = useState(false);

  return (
    <main className=" h-screen w-screen bg-[#121212]">
      <NavBar setIsFilterShown={setIsFilterShown} />
      <Outlet context={isFilterShown} />
    </main>
  );
};

export default RootLayout;
