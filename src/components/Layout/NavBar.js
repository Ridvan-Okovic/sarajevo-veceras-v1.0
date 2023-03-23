import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import EventContext from '../../context/liked-context';
import { BsFilterRight } from 'react-icons/bs';

const NavBar = (props) => {
  const ctx = useContext(EventContext);

  const openFilterHandler = () => {
    props.setIsFilterShown((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-[#1e1e1e] text-[#e1e1e1] uppercase shadow-lg font-montserrat">
      <h1 className="font-montserrat text-3xl tracking-widest">Logo</h1>
      <div className="flex gap-10 text-2xl items-baseline font-montserrat ">
        <button className="uppercase py-1">
          <NavLink
            className={({ isActive }) =>
              isActive ? `border-b-[0.1rem] border-white` : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </button>
        <button className="uppercase py-1">
          <NavLink
            className={({ isActive }) =>
              isActive ? `border-b-[0.1rem] border-white` : undefined
            }
            to="/events"
          >
            Events
          </NavLink>
        </button>

        <div className="relative">
          <button className="uppercase pb-1 relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? `border-b-[0.1rem] border-white` : undefined
              }
              to="/liked"
            >
              Liked
            </NavLink>
          </button>
          {ctx.amount !== 0 && (
            <span className="absolute -top-[0.5rem] -right-[0.7rem] bg-[#F6B162] text-[#363636] z-20 font-bold text-[11px] leading-[14px] w-[1.3rem] h-[1.3rem] grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>

        <button
          onClick={openFilterHandler}
          className="border-[0.1rem] bg-[#F6B162] border-[#F6B162] text-[#363636] font-semibold uppercase py-1 px-6 rounded-full shadow-xl hover:opacity-80 transition-all duration-300"
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
