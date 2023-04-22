import { useState, useContext, useEffect } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
} from '../../utils/filter';
import Event from './Event';
import SearchBar from '../Layout/SearchBar';
import EventContext from '../../context/event-context';

const EventContainer = (props) => {
  const ctx = useContext(EventContext);

  const [searchTerm, setSearchTerm] = useState('');

  const isChecked =
    props.isClubChecked || props.isPubChecked || props.isOpenChecked;

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
    props.checkedClubValue,
    props.checkedPubValue,
    props.checkedOpenValue
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

  // * Ovo je searchHandling funkcija
  const filtered = dateFilteredEvents.filter((eventInfo) => {
    return eventInfo.ime
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  // * Ovdje filtriram eventove po search term
  const filteredEvents = filtered.map((eventInfo) => {
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

  if (filteredEvents.length > 0) {
    content = filteredEvents;
  }

  if (isChecked && checkboxFilteredEvents.length > 0) {
    content = checkboxFilteredEvents;
  }

  if (filteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-center text-3xl text-[#e1e1e1]">
        Pokušajte drugo mjesto.
      </p>
    );
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
      {!isChecked && <SearchBar setSearchTerm={setSearchTerm} />}
      <div className=" px-[10%] my-[4rem] flex flex-col items-center justify-center">
        <h3 className="text-center text-3xl text-[#e1e1e1] font-montserrat uppercase tracking-wider mb-[4rem]">
          Upcoming Events
        </h3>
        <div
          className={
            filteredEvents.length === 0 ||
            (isChecked && checkboxFilteredEvents.length === 0)
              ? 'grid grid-cols-1'
              : 'grid grid-cols-1 lg:grid-cols-2 gap-8'
          }
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default EventContainer;
