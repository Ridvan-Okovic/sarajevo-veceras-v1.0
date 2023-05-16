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
      <div className="md:flex flex-row items-center justify-center gap-8 mt-8 mb-4 md:mb-16">
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
            className="md:hidden flex flex-row mr-4 sm:mr-6 md:mr-8 bg-zinc-900 px-4 py-2 rounded-lg items-center justify-center text-md md:text-lg cursor-pointer absolute top-[2.1rem] -left-16 md:top-10 md:-left-20"
          >
            <FaChevronLeft className="text-[#e1e1e1]" />
          </motion.button>
          <h3 className="mt-8 lg:mt-0 text-3xl sm:text-4xl md:text-5xl text-[#e1e1e1] font-montserrat font-normal tracking-wide mb-8">
            Liked Events
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 gap-4 sm:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3 place-items-center md:gap-8 text-center">
          {content}
        </div>
        {!isTypeChecked && !isDayChecked && likedEvents.length === 0 && (
          <p className="font-montserrat font-normal sm:text-xl md:text-2xl lg:text-3xl text-[#e1e1e1] text-center">
            Trenutno nemate lajkanih eventova!
          </p>
        )}
        {emptyFilterMessage && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            {emptyFilterMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default LikedEventContainer;
