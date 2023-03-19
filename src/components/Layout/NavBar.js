import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import EventContext from '../../context/liked-context';
import { BsFilterRight } from 'react-icons/bs';
import logo from '../../assets/logo.png';

const NavBar = (props) => {
  const ctx = useContext(EventContext);

  const openFilterHandler = () => {
    props.setIsFilterShown((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-[#1F1926] text-white uppercase font-montserrat">
      <img src={logo} className="h-12" alt="logo" />
      <div className="flex gap-10 text-xl items-baseline ">
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
            <span className="absolute -top-[0.5rem] -right-[0.7rem] bg-[#4E10B4] z-20 font-normal text-[10px] leading-[14px] w-[1.3rem] h-[1.3rem] grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>

        <button
          onClick={openFilterHandler}
          className="border-[0.1rem] border-white text-white uppercase py-1 px-6 rounded-full "
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
