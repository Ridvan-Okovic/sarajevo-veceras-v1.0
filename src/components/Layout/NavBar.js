import { useContext } from 'react';
import { Link } from 'react-router-dom';
import EventContext from '../../context/event-context';

const NavBar = (props) => {
  const ctx = useContext(EventContext);
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

        <div className="relative">
          <button className="uppercase relative z-10">
            <Link to="/liked">Liked</Link>
          </button>
          {ctx.amount !== 0 && (
            <span className="absolute -top-[0.6rem] -right-[0.9rem] bg-[#4E10B4] font-montserrat font-normal text-xs w-6 h-6 grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>

        <button
          onClick={openFilterHandler}
          className="border-[1px] border-white text-white uppercase py-1 px-6 hover:border-white  active:border-white transition-all duration-300"
        >
          Filter
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
