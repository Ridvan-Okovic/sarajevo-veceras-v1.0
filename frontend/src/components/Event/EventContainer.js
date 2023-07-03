import { useContext, useEffect, useState } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
  filterByDaySelected,
} from '../../utils/filter';

import { transformEvents, renderEvents } from '../../utils/events';

import Filter from '../Layout/Filter';
import EventContext from '../../context/event-context';
import ThemeContext from '../../context/theme-context';

const EventContainer = (props) => {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState([]);
  const [selectedDayFilter, setSelectedDayFilter] = useState([]);

  const ctx = useContext(EventContext);
  const events = transformEvents(props.events);

  const { theme } = useContext(ThemeContext);

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

  if (isTypeChecked && checkboxFilteredEvents.length === 0) {
    emptyFilterMessage = 'Za željeni filter nema eventova!';
  } else if (isDayChecked && checkboxDayFilteredEvents.length === 0) {
    emptyFilterMessage = 'Za željeni filter nema eventova!';
  }

  return (
    <>
      <div className="mt-8 mb-4 flex-row items-center justify-center gap-8 md:mb-16 md:flex">
        <Filter
          setSelectedFilter={setSelectedTypeFilter}
          selectedFilter={selectedTypeFilter}
          // ---------------------------------- //
          setSelectedDayFilter={setSelectedDayFilter}
          selectedDayFilter={selectedDayFilter}
        />
      </div>

      <div className="flex flex-col items-center">
        <h3
          className={`mt-8 mb-8 font-montserrat text-3xl font-normal tracking-wide ${
            theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
          } sm:text-4xl md:mt-0 md:text-5xl`}
        >
          Upcoming Events
        </h3>
        <div className="mx-6 grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-2 sm:gap-8 md:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3">
          {content}
        </div>

        {emptyFilterMessage && (
          <p
            className={`text-center font-montserrat text-3xl font-normal ${
              theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
            } `}
          >
            {emptyFilterMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default EventContainer;
