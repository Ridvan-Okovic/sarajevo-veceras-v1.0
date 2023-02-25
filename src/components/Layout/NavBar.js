import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchBarHandler = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[5rem] px-[10%] flex flex-row items-center justify-between bg-[#22252c] shadow-xl">
      <h2 className="text-2xl font-semibold text-[#e14658]">Logo</h2>
      <div className="flex gap-10 text-xl text-[#e14658] items-baseline">
        <a href="#">Home</a>
        <a href="#">Favorites</a>
        <a href="#">Filter</a>
      </div>
      <div className="flex items-center">
        {isSearchOpen && (
          <input
            className="outline-none bg-transparent border-b-[3px] placeholder:text-gray-300 text-white border-[#e14658]  transition-all"
            placeholder="Sloga..."
          />
        )}
        <FaSearch
          onClick={searchBarHandler}
          className="text-xl text-[#e14658] cursor-pointer ml-4"
        />
      </div>
    </div>
  );
};

export default NavBar;
