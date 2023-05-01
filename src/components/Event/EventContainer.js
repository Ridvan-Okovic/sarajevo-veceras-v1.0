import { useContext, useEffect, useState } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
} from '../../utils/filter';

import Event from './Event';
import Filter from '../Layout/Filter';
import EventContext from '../../context/event-context';

const EventContainer = (props) => {
  const [selectedFilter, setSelectedFilter] = useState([]);

  const ctx = useContext(EventContext);
  const events = props.events;

  useEffect(() => {
    ctx.addEvents(events);
  }, [ctx, events]);

  const dateFilteredEvents = filterByDateAscending(events);

  const eventsByDate = dateFilteredEvents.map((eventInfo, index) => {
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
        tip={eventInfo.tip}
        index={index}
      />
    );
  });

  const checkboxFilter = filterBycheckBoxInput(
    dateFilteredEvents,
    selectedFilter
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
        type={eventInfo.tip}
      />
    );
  });

  let isChecked = false;

  if (selectedFilter.length > 0) {
    isChecked = true;
  }

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

  if (isChecked && checkboxFilteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
        Za željeni filter nema eventova!
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8 mt-8 mb-16">
        <Filter
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          // ---------------------------------- //
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="items-start text-5xl text-[#e1e1e1] font-montserrat font-normal tracking-wide mb-8">
          Upcoming Events
        </h3>
        <div
          className={
            isChecked && checkboxFilteredEvents.length === 0
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

export default EventContainer;
