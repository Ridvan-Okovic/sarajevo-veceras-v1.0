import { useContext, useEffect } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
} from '../../utils/filter';
import Event from './Event';
import EventContext from '../../context/event-context';

const EventContainer = (props) => {
  const ctx = useContext(EventContext);
  const events = props.events;

  useEffect(() => {
    ctx.addEvents(events);
  }, [ctx, events]);

  // * Ovdje gledam da je datum veci od danasnjeg datuma
  const dateFilteredEvents = filterByDateAscending(events);

  const eventsByDate = dateFilteredEvents.map((eventInfo) => {
    return (
      <Event
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.ime}
        opis={eventInfo.opis}
        time={eventInfo.vrijeme}
        address={eventInfo.adresa}
        date={new Date(eventInfo.datum)}
      />
    );
  });

  const checkboxFilter = filterBycheckBoxInput(
    dateFilteredEvents,
    props.selectedFilter
  );

  const checkboxFilteredEvents = checkboxFilter.map((eventInfo) => {
    return (
      <Event
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.ime}
        opis={eventInfo.opis}
        time={eventInfo.vrijeme}
        address={eventInfo.adresa}
        date={new Date(eventInfo.datum)}
      />
    );
  });

  let content = (
    <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
      Nema pronađenih eventova. Molimo pokušajte kasnije!
    </p>
  );

  if (eventsByDate.length > 0) {
    content = eventsByDate;
  }

  if (checkboxFilteredEvents.length > 0) {
    content = checkboxFilteredEvents;
  }

  if (props.isChecked && checkboxFilteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
        Za željeni filter nema eventova!
      </p>
    );
  }

  return (
    <>
      <div className="my-[4rem] flex flex-col items-center">
        <h3 className="text-center text-3xl text-[#e1e1e1] font-montserrat uppercase tracking-wider mb-[4rem]">
          Upcoming Events
        </h3>
        <div
          className={
            props.isChecked && checkboxFilteredEvents.length === 0
              ? 'grid grid-cols-1'
              : 'grid grid-cols-1 px-12 xl:grid-cols-2 xl:px-12 2xl:grid-cols-3 2xl:px-12 place-items-center gap-8'
          }
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default EventContainer;
