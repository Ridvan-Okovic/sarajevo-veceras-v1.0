import { useContext } from 'react';
import { Link } from 'react-router-dom';
import EventContext from '../../context/event-context';
import { BsFilterRight } from 'react-icons/bs';

const NavBar = (props) => {
  const ctx = useContext(EventContext);
  const openFilterHandler = () => {
    props.setIsFilterOpened((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-[#1F1926] text-white uppercase font-montserrat">
      <h2 className="text-2xl font-semibold">Logo</h2>
      <div className="flex gap-10 text-xl items-baseline ">
        <button className="uppercase py-1 hover:border-b-[0.1rem] focus:border-b-[0.1rem] active:border-b-[0.1rem] transition-all">
          <Link to="/">Home</Link>
        </button>

        <div className="relative">
          <button className="uppercase pb-1 relative z-10 hover:border-b-[0.1rem] focus:border-b-[0.1rem] active:border-b-[0.1rem] transition-all">
            <Link to="/liked">Liked</Link>
          </button>
          {ctx.amount !== 0 && (
            <span className="absolute -top-[0.5rem] -right-[0.7rem] bg-[#4E10B4] z-20 font-normal text-[10px] leading-[14px] w-[1.3rem] h-[1.3rem] grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>

        <button
          onClick={openFilterHandler}
          className="border-[0.1rem] border-white text-white uppercase py-1 px-6 hover:border-white rounded-full active:border-white transition-all duration-300"
        >
          <span className="flex flex-row items-center justify-baseline gap-1">
            Filter
            <BsFilterRight />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
