import { useContext, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import { auth, googleProvider } from '../../config/firebase-config';
import { signOut } from 'firebase/auth';

import LikedContext from '../../context/liked-context';
import AuthContext from '../../context/auth-context';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [signOutToggle, setSignOutToggle] = useState(false);
  const ctx = useContext(LikedContext);
  const authContext = useContext(AuthContext);

  if (ctx.amount !== 0) {
    localStorage.setItem('liked-amount', ctx.amount);
  }

  let likedAmount;
  const amount = localStorage.getItem('liked-amount');

  if (amount !== null) {
    likedAmount = amount;
  } else {
    likedAmount = ctx.amount;
  }

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

  const signInWithGooglePopUp = () => {
    authContext.authenticateWithPopUp();
  };

  const toggleSignOutDropDown = () => {
    setSignOutToggle((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-30">
      <nav className=" flex h-[6rem] w-full flex-row items-center justify-between border-b border-zinc-800 border-opacity-40 bg-zinc-900 px-[10%] uppercase text-[#e1e1e1] md:bg-opacity-80 md:shadow-lg md:backdrop-blur-lg md:backdrop-filter ">
        <h1 className="text-3xl tracking-widest">Logo</h1>

        <ul className="hidden items-center gap-8 text-2xl tracking-wide md:flex">
          <li>
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
            <li>
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
            {likedAmount !== 0 && (
              <span className="absolute -top-[0.2rem] -right-[0.5rem] z-20 grid h-[1.2rem] w-[1.2rem] place-items-center rounded-full bg-[#C25452] pb-[0.5px] text-[12px] font-bold leading-[14px] text-[#e1e1e1] text-opacity-90">
                {likedAmount}
              </span>
            )}
          </div>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `opacity-100` : 'opacity-70'
              }
              to="/events/search"
            >
              <BiSearchAlt />
            </NavLink>
          </li>
          {!authContext.currentUserData && (
            <li>
              <button
                onClick={signInWithGooglePopUp}
                className=" flex items-center justify-center rounded border border-[#C25452] py-1 px-4 text-lg text-[#C25452] duration-200 hover:bg-[#C25452] hover:text-white active:bg-[#a34240] "
              >
                Sign in
              </button>
            </li>
          )}
          {authContext.currentUserData && (
            <div className="relative">
              <img
                onClick={toggleSignOutDropDown}
                className="w-10 cursor-pointer rounded-full border border-zinc-800 text-xs capitalize shadow-lg hover:opacity-80 active:opacity-60"
                src={authContext.currentUserData.photoURL}
                alt="Profile img"
              />
              {signOutToggle && (
                <div className="absolute right-0 mt-4 flex h-24 w-40 items-center justify-center rounded border border-zinc-800 border-opacity-75 bg-zinc-900 shadow-lg">
                  <button
                    onClick={() => {
                      signOut(auth, googleProvider);
                      setSignOutToggle(false);
                    }}
                    className="flex items-center justify-center rounded border border-[#C25452] py-1 px-4 text-lg text-[#C25452] duration-200 hover:bg-[#C25452] hover:text-white active:bg-[#a34240] "
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
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
                ? 'translate-x-0 bg-opacity-60 backdrop-blur-md backdrop-filter'
                : 'translate-x-full'
            } ease-in-[cubic-bezier(0.25, 1, 0.5, 1)] ease-out-[cubic-bezier(0.64, 0, 0.78, 0)] absolute top-24  right-0 flex h-[calc(100vh-6rem)] w-[60%] flex-col items-center gap-8 border border-t-0 border-zinc-800 border-opacity-40 bg-zinc-900 pt-10 font-sans text-xl font-semibold uppercase text-[#e1e1e1] duration-[0.6s] md:hidden`}
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
              <li className="relative pb-1" onClick={() => setToggle(false)}>
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
              {likedAmount !== 0 && (
                <span className="absolute -top-[0.2rem] -right-[0.5rem] z-20 grid h-[1rem] w-[1rem] place-items-center rounded-full bg-[#C25452] pt-[0.2px] text-[10px] font-bold leading-[14px] text-[#e1e1e1] text-opacity-90">
                  {likedAmount}
                </span>
              )}
            </div>
            <li className=" relative pb-1" onClick={() => setToggle(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `opacity-100` : 'opacity-70'
                }
                to="/events/search"
              >
                <BiSearchAlt />
              </NavLink>
            </li>
            {!authContext.currentUserData ? (
              <li>
                <button className=" flex items-center justify-center rounded border border-[#C25452] py-1 px-4 text-xl text-[#C25452]">
                  Sign in
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    signOut(auth, googleProvider);
                  }}
                  className=" flex items-center justify-center rounded border border-[#C25452] py-1 px-4 text-xl text-[#C25452]"
                >
                  Sign out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
