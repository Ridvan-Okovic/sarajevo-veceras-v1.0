import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../Layout/NavBar';

const RootLayout = () => {
  const [isFilterShown, setIsFilterShown] = useState(false);

  return (
    <main className="pb-8 min-h-screen font-manrope bg-[#121212] overflow-clip">
      <NavBar setIsFilterShown={setIsFilterShown} />

      <Outlet context={isFilterShown} />
    </main>
  );
};

export default RootLayout;
