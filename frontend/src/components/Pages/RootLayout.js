import { Outlet } from 'react-router-dom';

import NavBar from '../Layout/NavBar';

const RootLayout = () => {
  return (
    <main className="relative min-h-screen overflow-clip bg-[#121212] pb-8 font-manrope md:pb-16">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
