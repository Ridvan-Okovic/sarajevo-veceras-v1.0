import { useState } from 'react';

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const Filter = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const DAYS = [
    'Nedelja',
    'Ponedeljak',
    'Utorak',
    'Srijeda',
    'Četvrtak',
    'Petak',
    'Subota',
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

  const PLACE_TYPES = ['Club', 'Pub', 'Kafana', 'Open Air', 'Gastro'];

  const filter = PLACE_TYPES.map((type, i) => {
    return (
      <label
        key={i}
        className="font-normal text-lg flex items-center gap-4 text-[#e1e1e1]"
      >
        {type}
        <input
          className="appearance-none w-5 h-5 relative rounded-sm border cursor-pointer focus:outline-none transition-all duration-300 checked:bg-[#ffb560] checked:border-[#ffb560] after:content-[''] after:absolute after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:15px] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')]"
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
        className="flex flex-row items-center justify-between text-[#e1e1e1]"
        key={index}
      >
        {day}

        <input
          id={day}
          value={day}
          type="checkbox"
          className="appearance-none w-4 h-4 relative rounded-sm border cursor-pointer focus:outline-none transition-all duration-300 checked:bg-[#ffb560] checked:border-[#ffb560] after:content-[''] after:absolute after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:15px] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')]"
          onChange={handleChangeDay(day)}
        />
      </label>
    );
  });

  return (
    <div className="flex items-center justify-center shadow-lg bg-zinc-900 px-12 py-4 rounded-lg gap-10">
      <div className="flex flex-row gap-10">{filter}</div>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex flex-row items-center justify-between w-32 h-8 shadow-2xl px-3 rounded-md bg-zinc-800 opacity-80 hover:opacity-100 active:opacity-100"
        >
          <p className="text-[#e1e1e1]">Days</p>
          {!isDropdownOpen ? (
            <MdArrowDropDown className="text-[#e1e1e1] text-3xl" />
          ) : (
            <MdArrowDropUp className="text-[#e1e1e1] text-3xl" />
          )}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 rounded-md w-32 bg-zinc-800 shadow-lg left-0 border-dashed px-2 py-2">
            {daysFilter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
