import { useContext, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import LikedContext from '../../context/liked-context';
import LikedEvent from './LikedEvent';
import Filter from '../Layout/Filter';
import { filterBycheckBoxInput } from '../../utils/filter';

const LikedEventContainer = () => {
  const navigate = useNavigate();
  const ctx = useContext(LikedContext);
  const [selectedFilter, setSelectedFilter] = useState([]);

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
        date={new Date(eventInfo.date)}
      />
    );
  });

  const likedCheckboxFilter = filterBycheckBoxInput(events, selectedFilter);

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
        date={new Date(eventInfo.date)}
      />
    );
  });

  let content;

  if (likedEvents.length > 0) {
    content = likedEvents;
  }

  let isChecked = false;

  if (selectedFilter.length > 0) {
    isChecked = true;
  }

  if (isChecked && likedCheckboxFilter.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
        Za željeni filter nema eventova!
      </p>
    );
  }

  if (isChecked && likedCheckboxFilter.length > 0) {
    content = checkboxFilteredLikedEvents;
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8 mt-8 mb-16">
        <div
          onClick={() => navigate(-1)}
          className="flex flex-row gap-1 bg-zinc-900 px-4 py-2 rounded-lg items-center justify-center text-lg cursor-pointer"
        >
          <FaChevronLeft className="text-[#e1e1e1]" />
        </div>
        <Filter
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="items-start text-5xl text-[#e1e1e1] font-montserrat font-normal tracking-wide mb-8">
          Liked Events
        </h3>
        <div
          className={
            isChecked && checkboxFilteredLikedEvents.length === 0
              ? 'grid grid-cols-1'
              : 'grid grid-cols-1 xl:grid-cols-2 xl:px-12 2xl:grid-cols-3 place-items-center gap-8'
          }
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default LikedEventContainer;
