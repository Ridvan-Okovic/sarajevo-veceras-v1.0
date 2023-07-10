import { useContext, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Filter from '../Layout/Filter';
import { renderLikedEvents } from '../../utils/events';
import {
  filterBycheckBoxInput,
  filterLikedByDaySelected,
} from '../../utils/filter';
import { motion } from 'framer-motion';
import ThemeContext from '../../context/theme-context';
import LikedContext from '../../context/liked-context';

const LikedEventContainer = () => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState([]);
  const [selectedDayFilter, setSelectedDayFilter] = useState([]);
  const { likedEvents } = useContext(LikedContext);

  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const renderedLikedEvents = renderLikedEvents(likedEvents);

  const likedCheckboxFilter = filterBycheckBoxInput(
    likedEvents,
    selectedTypeFilter
  );
  const checkboxFilteredLikedEvents = renderLikedEvents(likedCheckboxFilter);

  const likedDayFilter = filterLikedByDaySelected(
    likedEvents,
    selectedDayFilter
  );
  const likedDayFilteredEvents = renderLikedEvents(likedDayFilter);

  const typeAndDayFilter = filterLikedByDaySelected(
    likedCheckboxFilter,
    selectedDayFilter
  );
  const typeAndDayFilteredEvents = renderLikedEvents(typeAndDayFilter);

  const isTypeChecked = selectedTypeFilter.length > 0;
  const isDayChecked = selectedDayFilter.length > 0;

  let content;

  if (likedEvents.length > 0) {
    content = renderedLikedEvents;
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
            className={`text-md absolute top-[34px] -left-16 mr-4 flex cursor-pointer flex-row items-center justify-center rounded-lg ${
              theme === 'dark'
                ? 'bg-zinc-900 text-[#e1e1e1]'
                : 'border-[#f2f2f2] bg-white text-zinc-900 shadow-[0_0_5px_0_rgba(0,0,0,0.1)]'
            } px-4 py-2 md:top-2 md:-left-20 md:text-lg`}
          >
            <FaChevronLeft />
          </motion.button>
          <h3
            className={`mt-8 mb-8 font-montserrat text-3xl font-normal tracking-wide ${
              theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
            } sm:text-4xl md:mt-0 md:text-5xl`}
          >
            Liked Events
          </h3>
        </div>
        <div className="mx-6 grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-2 sm:gap-8 md:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3">
          {content}
        </div>

        {likedEvents.length === 0 && !isDayChecked && !isTypeChecked && (
          <p
            className={`text-center font-montserrat font-normal ${
              theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
            }  sm:text-xl md:text-2xl lg:text-3xl`}
          >
            Trenutno nemate lajkanih eventova!
          </p>
        )}

        {emptyFilterMessage && (
          <p
            className={`text-center font-montserrat text-3xl font-normal ${
              theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
            } `}
          >
            {emptyFilterMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default LikedEventContainer;
