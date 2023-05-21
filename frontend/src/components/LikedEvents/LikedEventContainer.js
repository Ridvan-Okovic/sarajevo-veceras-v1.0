import { useContext, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import LikedContext from '../../context/liked-context';
import Filter from '../Layout/Filter';
import { renderLikedEvents } from '../../utils/events';
import { filterBycheckBoxInput, filterByDaySelected } from '../../utils/filter';
import { motion } from 'framer-motion';

const LikedEventContainer = () => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState([]);
  const [selectedDayFilter, setSelectedDayFilter] = useState([]);

  const navigate = useNavigate();
  const ctx = useContext(LikedContext);

  const events = ctx.events;

  const likedEvents = renderLikedEvents(events);

  const likedCheckboxFilter = filterBycheckBoxInput(events, selectedTypeFilter);
  const checkboxFilteredLikedEvents = renderLikedEvents(likedCheckboxFilter);

  const likedDayFilter = filterByDaySelected(events, selectedDayFilter);
  const likedDayFilteredEvents = renderLikedEvents(likedDayFilter);

  const typeAndDayFilter = filterByDaySelected(
    likedCheckboxFilter,
    selectedDayFilter
  );
  const typeAndDayFilteredEvents = renderLikedEvents(typeAndDayFilter);

  const isTypeChecked = selectedTypeFilter.length > 0;
  const isDayChecked = selectedDayFilter.length > 0;

  let content;

  if (likedEvents.length > 0) {
    content = likedEvents;
  }

  if (isTypeChecked && likedCheckboxFilter.length > 0) {
    content = checkboxFilteredLikedEvents;
  }

  if (isDayChecked && likedDayFilter.length > 0) {
    content = likedDayFilteredEvents;
  }

  if (likedCheckboxFilter.length > 0 && likedDayFilter.length > 0) {
    content = typeAndDayFilteredEvents;
  }

  if (isTypeChecked && likedCheckboxFilter.length === 0) {
    content = '';
  }

  if (isDayChecked && likedDayFilter.length === 0) {
    content = '';
  }

  let emptyFilterMessage = '';

  if (isTypeChecked && checkboxFilteredLikedEvents.length === 0) {
    emptyFilterMessage = 'Za željeni filter nema eventova!';
  } else if (isDayChecked && likedDayFilteredEvents.length === 0) {
    emptyFilterMessage = 'Za željeni filter nema eventova!';
  }

  return (
    <>
      <div className="mt-8 mb-4 flex-row items-center justify-center gap-8 md:mb-16 md:flex">
        <Filter
          setSelectedFilter={setSelectedTypeFilter}
          selectedFilter={selectedTypeFilter}
          // ---------------------------------------- //
          setSelectedDayFilter={setSelectedDayFilter}
          selectedDayFilter={selectedDayFilter}
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate('/events')}
            className="text-md absolute top-[2.1rem] -left-16 mr-4 flex cursor-pointer flex-row items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 sm:mr-6 md:top-10 md:-left-20 md:mr-8 md:hidden md:text-lg"
          >
            <FaChevronLeft className="text-[#e1e1e1]" />
          </motion.button>
          <h3 className="mt-8 mb-8 font-montserrat text-3xl font-normal tracking-wide text-[#e1e1e1] sm:text-4xl md:text-5xl lg:mt-0">
            Liked Events
          </h3>
        </div>
        <div className="mx-6 grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-2 sm:gap-8 md:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3">
          {content}
        </div>
        {!isTypeChecked && !isDayChecked && likedEvents.length === 0 && (
          <p className="text-center font-montserrat font-normal text-[#e1e1e1] sm:text-xl md:text-2xl lg:text-3xl">
            Trenutno nemate lajkanih eventova!
          </p>
        )}
        {emptyFilterMessage && (
          <p className="text-center font-montserrat text-3xl font-normal text-[#e1e1e1]">
            {emptyFilterMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default LikedEventContainer;
