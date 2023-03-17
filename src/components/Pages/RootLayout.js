import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../Layout/NavBar';

const RootLayout = () => {
  const [isFilterShown, setIsFilterShown] = useState(false);

  return (
    <>
      <NavBar setIsFilterShown={setIsFilterShown} />
      <Outlet context={isFilterShown} />
    </>
  );
};

export default RootLayout;
