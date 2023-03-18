import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import EventContext from '../../context/event-context';
import Event from '../Event/Event';

const DetailsPage = () => {
  const ctx = useContext(EventContext);
  const params = useParams();

  let today = new Date();
  let todayString = new Date().toString().slice(0, 10);

  const events = ctx.events;

  const filter = events.filter((event) => {
    return (
      (event.ime.toLocaleLowerCase() === params.place && event.datum > today) ||
      event.datum.toString().slice(0, 10) === todayString
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
    <div className="flex flex-col items-center justify-center">
      <h1 className="uppercase text-4xl my-8 font-montserrat">
        {params.place}
      </h1>
      <div className="flex flex-row gap-8 flex-wrap">{filteredEvents}</div>
    </div>
  );
};

export default DetailsPage;
