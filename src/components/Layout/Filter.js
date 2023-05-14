import { useState, useRef, useEffect } from 'react';

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const Filter = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropDownRef = useRef();

  useEffect(() => {
    const closeNav = (event) => {
      if (dropDownRef.current === null) {
        return;
      }

      if (!dropDownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      return () => document.removeEventListener('mousedown', closeNav);
    };

    document.addEventListener('mousedown', closeNav);
  }, []);

  const DAYS = [
    'Nedelja',
    'Ponedeljak',
    'Utorak',
    'Srijeda',
    'Četvrtak',
    'Petak',
    'Subota',
  ];

  const PLACE_TYPES = [
    'Club',
    'Pub',
    'Kafana',
    'Open Air',
    'Gastro',
    'Narodno',
  ];

  const handleChangeType = (index) => (e) => {
    const active = document.getElementById(index).checked;
    if (active) {
      props.setSelectedFilter((prev) => [...prev, e.target.value]);
    } else {
      props.setSelectedFilter(
        props.selectedFilter.filter((val) => val !== e.target.value)
      );
    }
  };

  const handleChangeDay = (index) => (e) => {
    const active = document.getElementById(index).checked;
    if (active) {
      props.setSelectedDayFilter((prev) => [...prev, e.target.value]);
    } else {
      props.setSelectedDayFilter(
        props.selectedDayFilter.filter((val) => val !== e.target.value)
      );
    }
  };

  const filter = PLACE_TYPES.map((type, i) => {
    return (
      <label
        key={i}
        className="text-md md:text-lg flex items-center justify-between gap-3 md:gap-2 lg:gap-4 text-[#e1e1e1]"
      >
        {type}
        <input
          className="appearance-none w-5 h-5 md:w-5 md:h-5 relative rounded-sm border cursor-pointer focus:outline-none transition-all duration-300 checked:bg-[#ffb560] checked:border-[#ffb560] after:content-[''] after:absolute after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:15px] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')]"
          type="checkbox"
          id={i}
          value={type}
          onChange={handleChangeType(i)}
        />
      </label>
    );
  });

  const daysFilter = DAYS.map((day, index) => {
    return (
      <label
        className={
          props.selectedDayFilter.includes(day)
            ? 'peer cursor-pointer flex flex-row items-center justify-between text-[#e1e1e1] text-opacity-100 peer text-base md:text-lg'
            : 'peer cursor-pointer flex flex-row items-center justify-between text-[#e1e1e1] text-opacity-60 hover:text-opacity-100 peer text-base md:text-lg'
        }
        key={index}
      >
        {day}

        <input
          id={day}
          value={day}
          type="checkbox"
          className="peer-hover:opacity-100 opacity-80 appearance-none w-4 h-4 md:w-5 md:h-5 relative rounded-sm border cursor-pointer focus:outline-none transition-all duration-300 checked:bg-[#ffb560] checked:border-[#ffb560] after:content-[''] after:absolute after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:15px] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')]"
          onChange={handleChangeDay(day)}
          checked={props.selectedDayFilter.includes(day)}
        />
      </label>
    );
  });

  return (
    <div className="flex items-center justify-center flex-col md:flex-row shadow-lg bg-zinc-900 bg-opacity-80 md:px-8 lg:px-12 py-4 rounded-none md:rounded-lg gap-2 md:gap-6 lg:gap-10">
      <div className="grid grid-cols-3 gap-x-8 gap-y-2 md:flex md:flex-row md:gap-6 lg:gap-10">
        {filter}
      </div>

      <div ref={dropDownRef} className="relative mt-2">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className={
            isDropdownOpen
              ? 'flex flex-row items-center justify-between w-32 h-8 shadow-2xl pl-3 pr-1 rounded-md bg-zinc-800 opacity-100'
              : 'flex flex-row items-center justify-between w-32 h-8 shadow-2xl pl-3 pr-1 rounded-md bg-zinc-800 opacity-80 hover:opacity-100 active:opacity-100'
          }
        >
          <p className="text-[#e1e1e1]">Days</p>
          {!isDropdownOpen ? (
            <MdArrowDropDown className="text-[#e1e1e1] text-3xl" />
          ) : (
            <MdArrowDropUp className="text-[#e1e1e1] text-3xl" />
          )}
        </button>
        {isDropdownOpen && (
          <div className="absolute z-20 top-10 left-0 md:-left-4 rounded-md w-32 md:w-40 bg-zinc-800 shadow-lg px-2 py-2 space-y-1 backdrop-filter backdrop-blur-md bg-opacity-50 border-[1px] border-zinc-700 border-opacity-50">
            {daysFilter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
