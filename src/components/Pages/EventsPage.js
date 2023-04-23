import { useState } from 'react';
import { useOutletContext, useLoaderData } from 'react-router-dom';

import Filter from '../Layout/Filter';
import EventContainer from '../Event/EventContainer';
import { transformEvents } from '../../utils/events';
import { getEvents } from '../../api/api';

const EventsPage = () => {
  const data = useLoaderData();

  const events = transformEvents(data);

  const isFilterShown = useOutletContext();

  const [selectedFilter, setSelectedFilter] = useState([]);

  let isChecked = false;

  if (selectedFilter.length > 0) {
    isChecked = true;
  }

  return (
    <>
      {isFilterShown && (
        <Filter
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
      )}

      <EventContainer
        events={events}
        selectedFilter={selectedFilter}
        isChecked={isChecked}
      />
    </>
  );
};

export default EventsPage;

export function loader() {
  return getEvents();
}
