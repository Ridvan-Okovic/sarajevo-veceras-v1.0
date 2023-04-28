import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

import EventContext from '../../context/liked-context';

const NavBar = () => {
  const ctx = useContext(EventContext);

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-zinc-900 text-[#e1e1e1] shadow-lg uppercase">
      <h1 className="text-3xl tracking-widest">Logo</h1>

      <ul className="sm:flex hidden gap-8 text-2xl items-center tracking-wide">
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
            <span className="absolute -top-[0.4rem] -right-[0.5rem] bg-[#ffb560] text-[#363636] z-20 font-bold text-[11px] leading-[14px] w-[1.2rem] h-[1.2rem] grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>
        <li className=" pb-1 relative">
          <NavLink
            className={({ isActive }) =>
              isActive ? `opacity-100` : 'opacity-70'
            }
            to="/search"
          >
            <BiSearchAlt />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
