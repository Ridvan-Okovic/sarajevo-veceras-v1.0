import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import EventContext from '../../context/liked-context';
import { BsFilterRight } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiCloseCircleLine } from 'react-icons/ri';

const NavBar = (props) => {
  const ctx = useContext(EventContext);
  const [toggle, setToggle] = useState(false);

  const openFilterHandler = () => {
    props.setIsFilterShown((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-8 flex flex-row items-center justify-between bg-zinc-900 text-[#e1e1e1] uppercase shadow-lg font-montserrat">
      <h1 className="font-montserrat text-3xl tracking-widest">Logo</h1>

      <ul className="sm:flex hidden gap-8 text-xl items-baseline font-montserrat ">
        <li className="uppercase py-1">
          <NavLink
            className={({ isActive }) =>
              isActive ? `border-b-[0.1rem] border-white` : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="uppercase py-1">
          <NavLink
            className={({ isActive }) =>
              isActive ? `border-b-[0.1rem] border-white` : undefined
            }
            to="/events"
          >
            Events
          </NavLink>
        </li>

        <div className="relative">
          <li className="uppercase pb-1 relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? `border-b-[0.1rem] border-white` : undefined
              }
              to="/liked"
            >
              Liked
            </NavLink>
          </li>
          {ctx.amount !== 0 && (
            <span className="absolute -top-[0.4rem] -right-[0.5rem] bg-amber-500 text-[#363636] z-20 font-bold text-[11px] leading-[14px] w-[1.2rem] h-[1.2rem] grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>

        <li
          onClick={openFilterHandler}
          className="border-[0.1rem] bg-amber-500 border-amber-500 text-[#363636] font-semibold uppercase py-1 px-6 rounded-full shadow-xl cursor-pointer hover:opacity-80 transition-all duration-300"
        >
          <span className="flex flex-row items-center justify-baseline gap-1">
            Filter
            <BsFilterRight />
          </span>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        {!toggle && (
          <HiOutlineMenuAlt3
            onClick={() => setToggle((prev) => !prev)}
            className="text-3xl text-[#e1e1e1] cursor-pointer"
          />
        )}
        {toggle && (
          <RiCloseCircleLine
            onClick={() => setToggle((prev) => !prev)}
            className="text-3xl text-[#e1e1e1] cursor-pointer"
          />
        )}
        <div
          className={`${
            toggle ? 'flex translate-x-0' : 'flex translate-x-full'
          } w-[80%] ease-in-out duration-300 h-screen shadow-lg top-14 absolute -right-8 justify-center my-2 min-2-[140px] bg-gradient-to-tr from-[#121212] to-[#1e1e1e] rounded-l-xl`}
        >
          <ul className="flex flex-col items-center justify-center gap-4 font-montserrat text-2xl ">
            <li className="uppercase">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `border-b-[0.1rem] border-white` : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="uppercase">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `border-b-[0.1rem] border-white` : undefined
                }
                to="/events"
              >
                Events
              </NavLink>
            </li>

            <div className="relative">
              <li className="uppercase relative">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `border-b-[0.1rem] border-white` : undefined
                  }
                  to="/liked"
                >
                  Liked
                </NavLink>
              </li>
              {ctx.amount !== 0 && (
                <span className="absolute -top-[0.4rem] -right-[0.5rem] bg-[#F6B162] text-[#363636] z-20 font-bold text-[11px] leading-[14px] w-[1.3rem] h-[1.3rem] grid items-center justify-center rounded-full">
                  {ctx.amount}
                </span>
              )}
            </div>

            <li
              onClick={openFilterHandler}
              className="border-[0.1rem] bg-[#F6B162] border-[#F6B162] text-[#363636] font-semibold uppercase py-1 px-6 rounded-full shadow-xl cursor-pointer hover:opacity-80 transition-all duration-300"
            >
              <span className="flex flex-row items-center justify-baseline gap-1">
                Filter
                <BsFilterRight />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
