import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../Layout/NavBar';

const RootLayout = () => {
  const [isFilterShown, setIsFilterShown] = useState(false);

  return (
    <main className="min-h-screen overflow-clip bg-[#121212] pb-8 font-manrope">
      <NavBar setIsFilterShown={setIsFilterShown} />

      <Outlet context={isFilterShown} />
    </main>
  );
};

export default RootLayout;
