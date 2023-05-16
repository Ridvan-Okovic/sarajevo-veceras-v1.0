import { useContext, useEffect, useState } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
  filterByDaySelected,
} from '../../utils/filter';

import { transformEvents, renderEvents } from '../../utils/events';

import Filter from '../Layout/Filter';
import EventContext from '../../context/event-context';

const EventContainer = (props) => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState([]);
  const [selectedDayFilter, setSelectedDayFilter] = useState([]);

  const ctx = useContext(EventContext);
  const events = transformEvents(props.events);

  useEffect(() => {
    ctx.addEvents(events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateFilteredEvents = filterByDateAscending(events);

  const eventsByDate = renderEvents(dateFilteredEvents);

  const checkboxTypeFilter = filterBycheckBoxInput(
    dateFilteredEvents,
    selectedTypeFilter
  );

  const checkboxFilteredEvents = renderEvents(checkboxTypeFilter);

  const checkboxDayFilter = filterByDaySelected(
    dateFilteredEvents,
    selectedDayFilter
  );

  const checkboxDayFilteredEvents = renderEvents(checkboxDayFilter);

  const typeAndDayFilter = filterByDaySelected(
    checkboxTypeFilter,
    selectedDayFilter
  );

  const typeAndDayFilteredEvents = renderEvents(typeAndDayFilter);

  const isTypeChecked = selectedTypeFilter.length > 0;
  const isDayChecked = selectedDayFilter.length > 0;

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

  if (
    (isTypeChecked && checkboxFilteredEvents.length === 0) ||
    (isDayChecked && checkboxDayFilteredEvents.length === 0)
  ) {
    content = '';
  }

  let emptyFilterMessage = '';

  if (
    (isTypeChecked && checkboxFilteredEvents.length === 0) ||
    (isDayChecked && checkboxDayFilteredEvents.length === 0)
  ) {
    emptyFilterMessage = 'Za željeni filter nema eventova!';
  }

  return (
    <>
      <div className="md:flex flex-row items-center justify-center gap-8 mt-8 mb-4 md:mb-16">
        <Filter
          setSelectedFilter={setSelectedTypeFilter}
          selectedFilter={selectedTypeFilter}
          // ---------------------------------- //
          setSelectedDayFilter={setSelectedDayFilter}
          selectedDayFilter={selectedDayFilter}
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="mt-8 md:mt-0 text-3xl sm:text-4xl md:text-5xl text-[#e1e1e1] font-montserrat font-normal tracking-wide mb-8">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 gap-4 sm:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3 place-items-center md:gap-8 text-center">
          {content}
        </div>

        {emptyFilterMessage && (
          <p className="font-montserrat font-normal text-3xl text-[#e1e1e1] text-center">
            {emptyFilterMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default EventContainer;
