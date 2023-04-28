import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventContext from '../../context/event-context';
import Event from '../Event/Event';
import { filterByDateAscending } from '../../utils/filter';
import { motion } from 'framer-motion';

import { FaChevronLeft } from 'react-icons/fa';

const DetailsPage = () => {
  const navigate = useNavigate();
  const ctx = useContext(EventContext);
  const params = useParams();

  const events = ctx.events;

  const filterByDate = filterByDateAscending(events);

  const filterByName = filterByDate.filter((eventInfo) => {
    return eventInfo.ime.toLocaleLowerCase() === params.place;
  });

  const filteredEvents = filterByName.map((event) => {
    return (
      <Event
        key={event.id}
        id={event.id}
        poster={event.poster}
        name={event.ime}
        opis={event.opis}
        time={event.vrijeme}
        address={event.adresa}
        date={new Date(event.datum)}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-8">
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate(-1)}
          className="flex flex-row gap-1 bg-zinc-900 px-4 py-2 rounded-lg items-center justify-center text-lg cursor-pointer"
        >
          <FaChevronLeft className="text-[#e1e1e1]" />
        </motion.button>
        <h1 className="text-5xl my-8 font-montserrat tracking-wide capitalize text-[#e1e1e1]">
          {params.place}
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-12 2xl:grid-cols-3 place-items-center gap-8">
          {filteredEvents}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
