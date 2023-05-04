import { useContext, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import LikedContext from '../../context/liked-context';
import LikedEvent from './LikedEvent';
import Filter from '../Layout/Filter';
import { filterBycheckBoxInput, filterByDaySelected } from '../../utils/filter';
import { motion } from 'framer-motion';

const LikedEventContainer = () => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState([]);
  const [selectedDayFilter, setSelectedDayFilter] = useState([]);

  const navigate = useNavigate();
  const ctx = useContext(LikedContext);

  const events = ctx.events;

  const likedEvents = events.map((eventInfo) => {
    return (
      <LikedEvent
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.name}
        opis={eventInfo.description}
        time={eventInfo.time}
        address={eventInfo.address}
        date={new Date(eventInfo.datum)}
        index={eventInfo.index}
      />
    );
  });

  const likedCheckboxFilter = filterBycheckBoxInput(events, selectedTypeFilter);

  const checkboxFilteredLikedEvents = likedCheckboxFilter.map((eventInfo) => {
    return (
      <LikedEvent
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.name}
        opis={eventInfo.description}
        time={eventInfo.time}
        address={eventInfo.address}
        date={new Date(eventInfo.datum)}
        index={eventInfo.index}
      />
    );
  });

  const likedDayFilter = filterByDaySelected(events, selectedDayFilter);

  const likedDayFilteredEvents = likedDayFilter.map((eventInfo) => {
    return (
      <LikedEvent
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.name}
        opis={eventInfo.description}
        time={eventInfo.time}
        address={eventInfo.address}
        date={new Date(eventInfo.datum)}
        index={eventInfo.index}
      />
    );
  });

  const typeAndDayFilter = filterByDaySelected(
    likedCheckboxFilter,
    selectedDayFilter
  );

  const typeAndDayFilteredEvents = typeAndDayFilter.map((eventInfo) => {
    return (
      <LikedEvent
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.name}
        opis={eventInfo.description}
        time={eventInfo.time}
        address={eventInfo.address}
        date={new Date(eventInfo.datum)}
        index={eventInfo.index}
      />
    );
  });

  console.log(typeAndDayFilter);

  let content;

  if (likedEvents.length > 0) {
    content = likedEvents;
  }

  let isTypeChecked = false;
  let isDayChecked = false;

  if (selectedTypeFilter.length > 0) {
    isTypeChecked = true;
  }

  if (selectedDayFilter.length > 0) {
    isDayChecked = true;
  }

  if (isDayChecked && likedDayFilter.length > 0) {
    content = likedDayFilteredEvents;
  }

  if (isTypeChecked && likedCheckboxFilter.length > 0) {
    content = checkboxFilteredLikedEvents;
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

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8 mt-8 mb-16">
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/events')}
          className="flex flex-row gap-1 bg-zinc-900 px-4 py-2 rounded-lg items-center justify-center text-lg cursor-pointer"
        >
          <FaChevronLeft className="text-[#e1e1e1]" />
        </motion.button>
        <Filter
          setSelectedFilter={setSelectedTypeFilter}
          selectedFilter={selectedTypeFilter}
          // ---------------------------------------- //
          setSelectedDayFilter={setSelectedDayFilter}
          selectedDayFilter={selectedDayFilter}
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="items-start text-5xl text-[#e1e1e1] font-montserrat font-normal tracking-wide mb-8">
          Liked Events
        </h3>
        <div
          className={
            isTypeChecked && checkboxFilteredLikedEvents.length === 0
              ? 'grid grid-cols-1'
              : 'grid grid-cols-1 xl:grid-cols-2 xl:px-12 2xl:grid-cols-3 place-items-center gap-8'
          }
        >
          {content}
        </div>
        {!isTypeChecked && !isDayChecked && likedEvents.length === 0 && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            Trenutno nemate lajkanih eventova!
          </p>
        )}
        {isTypeChecked && checkboxFilteredLikedEvents.length === 0 && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            Za željeni filter nema eventova!
          </p>
        )}
        {isDayChecked && likedDayFilteredEvents.length === 0 && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            Za željeni filter nema eventova!
          </p>
        )}
      </div>
    </>
  );
};

export default LikedEventContainer;
