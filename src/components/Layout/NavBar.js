import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const NavBar = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchChangeHandler = (event) => {
    props.onAddSearchTermHandler(event.target.value);
  };

  const searchBarHandler = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const openFilterHandler = () => {
    props.setIsFilterOpened((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 w-full h-[5rem] px-[10%] flex flex-row items-center justify-between bg-[#22252c]">
      <h2 className="text-2xl font-semibold text-[#e14658]">Logo</h2>
      <div className="flex gap-10 text-xl text-[#e14658] items-baseline">
        {/* //TODO: Change a tags to be Links using React Router! */}
        <a href="#">Home</a>
        <a href="#">Liked</a>
        <button
          onClick={openFilterHandler}
          className="text-md border-2 border-[#e14658] text-[#e14658] py-1 px-6 hover:border-[#eee] hover:text-[#eee] active:border-[#eee] active:text-[#eee] transition-all duration-300"
        >
          Filter
        </button>
      </div>
      <div className="flex items-center justify-end">
        {isSearchOpen && (
          <input
            onChange={searchChangeHandler}
            className="outline-none bg-transparent border-b-[3px] placeholder:text-gray-300 text-white border-[#e14658] mr-4 transition-all"
            placeholder="Sloga..."
          />
        )}
        <FaSearch
          onClick={searchBarHandler}
          className="text-xl text-[#e14658] cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default NavBar;
