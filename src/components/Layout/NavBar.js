import EventContext from '../context/event-context';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

const NavBar = (props) => {
  const ctx = useContext(EventContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showLiked = () => {
    ctx.setIsLikedPanelShown();
  };

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
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-[#1F1926] text-white uppercase">
      <h2 className="text-2xl font-semibold">Logo</h2>
      <div className="flex gap-10 text-lg items-baseline ">
        <button className="uppercase">
          <Link to="/">Home</Link>
        </button>

        <button onClick={showLiked} className="uppercase">
          <Link to="/liked">Liked</Link>
        </button>

        <button
          onClick={openFilterHandler}
          className="border-2 border-white text-white uppercase  py-1 px-6 hover:border-[#eee] hover:text-[#eee] active:border-[#eee] active:text-[#eee] transition-all duration-300"
        >
          Filter
        </button>
      </div>
      <div className="flex items-center justify-center">
        {isSearchOpen && (
          <input
            onChange={searchChangeHandler}
            className="outline-none bg-transparent border-b-[2px] placeholder:text-gray-300 text-white border-white mr-4"
            placeholder="Sloga..."
          />
        )}
        <FaSearch
          onClick={searchBarHandler}
          className="text-xl text-white cursor-pointer w-[54.86px]"
        />
      </div>
    </nav>
  );
};

export default NavBar;
