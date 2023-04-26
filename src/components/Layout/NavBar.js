import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

import EventContext from '../../context/liked-context';

const NavBar = () => {
  const ctx = useContext(EventContext);

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-zinc-900 text-[#e1e1e1] uppercase shadow-lg font-montserrat">
      <h1 className="font-montserrat text-3xl tracking-widest">Logo</h1>

      <ul className="sm:flex hidden gap-8 text-xl items-center font-montserrat ">
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
            <span className="absolute -top-[0.4rem] -right-[0.5rem] bg-[#ffb560] text-[#363636] z-20 font-bold text-[11px] leading-[14px] w-[1.2rem] h-[1.2rem] grid items-center justify-center rounded-full">
              {ctx.amount}
            </span>
          )}
        </div>
        <li className=" pb-1 relative">
          <NavLink
            className={({ isActive }) =>
              isActive ? `border-b-[0.1rem] border-white` : undefined
            }
            to="/events/search"
          >
            <BiSearchAlt />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
