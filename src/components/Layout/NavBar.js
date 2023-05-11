import { useContext, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt, BiCalendar } from 'react-icons/bi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import EventContext from '../../context/liked-context';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const closeNav = (event) => {
      if (menuRef.current === null) {
        return;
      }

      if (!menuRef.current.contains(event.target)) {
        setToggle(false);
      }

      return () => document.removeEventListener('mousedown', closeNav);
    };

    document.addEventListener('mousedown', closeNav);
  }, []);

  const ctx = useContext(EventContext);

  return (
    <nav className="sticky top-0 z-30 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-zinc-900 border-b border-zinc-800 border-opacity-40 text-[#e1e1e1] shadow-lg uppercase backdrop-filter backdrop-blur-lg bg-opacity-80">
      <h1 className="text-3xl tracking-widest">Logo</h1>

      <ul className="hidden md:flex gap-8 text-2xl items-center tracking-wide">
        <li className="py-1">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `border-b-[0.1rem] border-white opacity-100`
                : 'opacity-70'
            }
            to="/events"
          >
            Events
          </NavLink>
        </li>

        <div className="relative">
          <li className="pb-1 relative">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `border-b-[0.1rem] border-white opacity-100`
                  : 'opacity-70'
              }
              to="/liked"
            >
              Liked
            </NavLink>
          </li>
          {ctx.amount !== 0 && (
            <span className="absolute -top-[0.2rem] -right-[0.5rem] bg-[#C25452] text-[#e1e1e1] text-opacity-90 z-20 font-bold text-[12px] leading-[14px] w-[1.2rem] h-[1.2rem] grid place-items-center rounded-full pb-[0.5px]">
              {ctx.amount}
            </span>
          )}
        </div>
        <li className=" pb-1 relative">
          <NavLink
            className={({ isActive }) =>
              isActive ? `opacity-100` : 'opacity-70'
            }
            to="/liked/calendar"
          >
            <BiCalendar />
          </NavLink>
        </li>
        <li className=" pb-1 relative">
          <NavLink
            className={({ isActive }) =>
              isActive ? `opacity-100` : 'opacity-70'
            }
            to="/events/search"
          >
            <BiSearchAlt />
          </NavLink>
        </li>
      </ul>
      <div ref={menuRef} className="md:hidden">
        {!toggle && (
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="rounded-lg p-1 shadow-sm"
          >
            <HiOutlineMenuAlt3 className="text-3xl" />
          </button>
        )}
        {toggle && (
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="z-50 rounded-lg p-1 shadow-sm"
          >
            <IoMdClose className="z-50 text-3xl" />
          </button>
        )}

        <ul
          className={`${
            toggle
              ? 'translate-x-0 backdrop-filter backdrop-blur-md bg-opacity-60'
              : 'translate-x-full'
          } ease-in-[cubic-bezier(0.25, 1, 0.5, 1)] ease-out-[cubic-bezier(0.64, 0, 0.78, 0)] absolute top-24  right-0 z-50 flex h-[calc(100vh-6rem)] w-[60%] flex-col items-center gap-8 bg-zinc-900 pt-10 font-sans text-xl font-semibold uppercase text-[#e1e1e1] duration-[0.6s] md:hidden border-t-0 border border-zinc-800 border-opacity-40`}
        >
          <li className="py-1" onClick={() => setToggle(false)}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `border-b-[0.1rem] border-white opacity-100`
                  : 'opacity-70'
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>

          <div className="relative">
            <li className="pb-1 relative" onClick={() => setToggle(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `border-b-[0.1rem] border-white opacity-100`
                    : 'opacity-70'
                }
                to="/liked"
              >
                Liked
              </NavLink>
            </li>
            {ctx.amount !== 0 && (
              <span className="absolute -top-[0.2rem] -right-[0.5rem] bg-[#C25452] text-[#e1e1e1] text-opacity-90 z-20 font-bold text-[10px] leading-[14px] w-[1rem] h-[1rem] grid place-items-center rounded-full pt-[0.2px]">
                {ctx.amount}
              </span>
            )}
          </div>
          <li className=" pb-1 relative" onClick={() => setToggle(false)}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `opacity-100` : 'opacity-70'
              }
              to="/liked/calendar"
            >
              <BiCalendar />
            </NavLink>
          </li>
          <li className=" pb-1 relative" onClick={() => setToggle(false)}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `opacity-100` : 'opacity-70'
              }
              to="/events/search"
            >
              <BiSearchAlt />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
