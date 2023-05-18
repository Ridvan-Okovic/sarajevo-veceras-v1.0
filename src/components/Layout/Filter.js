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

  const PLACE_TYPES = ['Club', 'Pub', 'Kafana', 'Gastro', 'Narodno', 'Techno'];

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
        className="text-md flex items-center justify-between gap-3 text-[#e1e1e1] md:gap-2 md:text-lg lg:gap-4"
      >
        {type}
        <input
          className="relative h-5 w-5 cursor-pointer appearance-none rounded-sm border transition-all duration-300 after:absolute after:h-full after:w-full after:bg-[length:15px] after:bg-center after:bg-no-repeat after:content-[''] checked:border-[#ffb560] checked:bg-[#ffb560] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')] focus:outline-none md:h-5 md:w-5"
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
            ? 'peer peer flex cursor-pointer flex-row items-center justify-between text-base text-[#e1e1e1] text-opacity-100 md:text-lg'
            : 'peer peer flex cursor-pointer flex-row items-center justify-between text-base text-[#e1e1e1] text-opacity-60 hover:text-opacity-100 md:text-lg'
        }
        key={index}
      >
        {day}

        <input
          id={day}
          value={day}
          type="checkbox"
          className="relative h-4 w-4 cursor-pointer appearance-none rounded-sm border opacity-80 transition-all duration-300 after:absolute after:h-full after:w-full after:bg-[length:15px] after:bg-center after:bg-no-repeat after:content-[''] checked:border-[#ffb560] checked:bg-[#ffb560] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')] focus:outline-none peer-hover:opacity-100 md:h-5 md:w-5"
          onChange={handleChangeDay(day)}
          checked={props.selectedDayFilter.includes(day)}
        />
      </label>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-none bg-zinc-900 bg-opacity-80 py-4 shadow-lg md:flex-row md:gap-6 md:rounded-lg md:px-8 lg:gap-10 lg:px-12">
      <div className="grid grid-cols-3 gap-x-8 gap-y-2 md:flex md:flex-row md:gap-6 lg:gap-10">
        {filter}
      </div>

      <div ref={dropDownRef} className="relative mt-2 md:mt-0">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className={
            isDropdownOpen
              ? 'flex h-8 w-32 flex-row items-center justify-between rounded-md bg-zinc-800 pl-3 pr-1 opacity-100 shadow-2xl'
              : 'flex h-8 w-32 flex-row items-center justify-between rounded-md bg-zinc-800 pl-3 pr-1 opacity-80 shadow-2xl hover:opacity-100 active:opacity-100'
          }
        >
          <p className="text-[#e1e1e1]">Days</p>
          {!isDropdownOpen ? (
            <MdArrowDropDown className="text-3xl text-[#e1e1e1]" />
          ) : (
            <MdArrowDropUp className="text-3xl text-[#e1e1e1]" />
          )}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 left-0 z-20 w-32 space-y-1 rounded-md border-[1px] border-zinc-700 border-opacity-50 bg-zinc-800 bg-opacity-50 px-2 py-2 shadow-lg backdrop-blur-md backdrop-filter md:-left-4 md:w-40">
            {daysFilter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
