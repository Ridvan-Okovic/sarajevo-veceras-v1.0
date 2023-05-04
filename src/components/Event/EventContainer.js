import { useContext, useEffect, useState } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
  filterByDaySelected,
} from '../../utils/filter';

import { transformEvents } from '../../utils/events';

import Event from './Event';
import Filter from '../Layout/Filter';
import EventContext from '../../context/event-context';

const EventContainer = (props) => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState([]);
  const [selectedDayFilter, setSelectedDayFilter] = useState([]);

  const ctx = useContext(EventContext);
  const events = transformEvents(props.events);

  useEffect(() => {
    ctx.addEvents(events);
  }, []);

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

  const checkboxTypeFilter = filterBycheckBoxInput(
    dateFilteredEvents,
    selectedTypeFilter
  );

  const checkboxFilteredEvents = checkboxTypeFilter.map((eventInfo) => {
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

  const checkboxDayFilter = filterByDaySelected(
    dateFilteredEvents,
    selectedDayFilter
  );

  const checkboxDayFilteredEvents = checkboxDayFilter.map((eventInfo) => {
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

  const typeAndDayFilter = filterByDaySelected(
    checkboxTypeFilter,
    selectedDayFilter
  );

  const typeAndDayFilteredEvents = typeAndDayFilter.map((eventInfo) => {
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

  let isTypeChecked = false;
  let isDayChecked = false;

  if (selectedTypeFilter.length > 0) {
    isTypeChecked = true;
  }

  if (selectedDayFilter.length > 0) {
    isDayChecked = true;
  }

  let content;

  if (eventsByDate.length > 0) {
    content = eventsByDate;
  }

  if (checkboxFilteredEvents.length > 0) {
    content = checkboxFilteredEvents;
  }

  if (checkboxDayFilter.length > 0) {
    content = checkboxDayFilteredEvents;
  }

  if (checkboxTypeFilter.length > 0 && checkboxDayFilter.length > 0) {
    content = typeAndDayFilteredEvents;
  }

  if (isTypeChecked && checkboxFilteredEvents.length === 0) {
    content = '';
  }

  if (isDayChecked && checkboxDayFilteredEvents.length === 0) {
    content = '';
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8 mt-8 mb-16">
        <Filter
          setSelectedFilter={setSelectedTypeFilter}
          selectedFilter={selectedTypeFilter}
          // ---------------------------------- //
          setSelectedDayFilter={setSelectedDayFilter}
          selectedDayFilter={selectedDayFilter}
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="items-start text-5xl text-[#e1e1e1] font-montserrat font-normal tracking-wide mb-8">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-12 2xl:grid-cols-3 place-items-center gap-8 text-center">
          {content}
        </div>
        {isTypeChecked && checkboxFilteredEvents.length === 0 && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            Za željeni filter nema eventova!
          </p>
        )}
        {isDayChecked && checkboxDayFilteredEvents.length === 0 && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            Za željeni filter nema eventova!
          </p>
        )}
      </div>
    </>
  );
};

export default EventContainer;
