import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventContext from '../../context/event-context';
import { filterByDateAscending } from '../../utils/filter';
import { renderEvents } from '../../utils/events';
import { motion } from 'framer-motion';

import { FaChevronLeft } from 'react-icons/fa';
import ThemeContext from '../../context/theme-context';

const DetailsPage = () => {
  const navigate = useNavigate();
  const ctx = useContext(EventContext);
  const { theme } = useContext(ThemeContext);
  const params = useParams();

  const events = ctx.events;

  const filterByDate = filterByDateAscending(events);

  const filterByName = filterByDate.filter((eventInfo) => {
    return eventInfo.ime.toLocaleLowerCase() === params.place;
  });

  const filteredEvents = renderEvents(filterByName);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-8">
        <div className="relative">
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate('/events')}
            className={`text-md absolute top-[34px] -left-16 mr-4 flex cursor-pointer flex-row items-center justify-center rounded-lg px-4 py-2 shadow-lg sm:mr-6 md:top-10 md:-left-20 md:mr-8 md:text-lg
              ${
                theme === 'dark'
                  ? 'bg-zinc-900 text-[#e1e1e1]'
                  : 'border border-[#f2f2f2] bg-white text-zinc-900'
              }`}
          >
            <FaChevronLeft />
          </motion.button>
          <h1
            className={`my-8 text-3xl capitalize tracking-wide md:text-5xl ${
              theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
            }`}
          >
            {params.place}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mx-6 grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-2 sm:gap-8 md:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3">
          {filteredEvents}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
