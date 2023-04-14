import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventContext from '../../context/event-context';
import Event from '../Event/Event';
import { FaChevronLeft } from 'react-icons/fa';

const DetailsPage = () => {
  const navigate = useNavigate();
  const ctx = useContext(EventContext);
  const params = useParams();

  let today = new Date();
  let todayString = new Date().toString().slice(0, 10);

  const events = ctx.events;

  const filter = events.filter((event) => {
    return (
      (event.ime.toLocaleLowerCase() === params.place && event.datum > today) ||
      (event.ime.toLocaleLowerCase() === params.place &&
        event.datum.toString().slice(0, 10) === todayString)
    );
  });

  const filteredEvents = filter.map((event) => {
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
    <div className="flex flex-col items-center justify-center px-[10%]">
      <h1 className="uppercase text-4xl my-8 font-montserrat tracking-widest text-[#e1e1e1]">
        {params.place}
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-row gap-2 items-center justify-start w-full mb-8 text-xl text-[#e1e1e1]">
          <FaChevronLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <p className="font-montserrat text-2xl text-[#e1e1e1]">Nazad</p>
        </div>
        <div className="grid grid-cols-2 gap-8">{filteredEvents}</div>
      </div>
    </div>
  );
};

export default DetailsPage;
