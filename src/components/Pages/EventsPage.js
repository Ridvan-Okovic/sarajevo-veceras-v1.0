import { useLoaderData } from 'react-router-dom';

import EventContainer from '../Event/EventContainer';
import { transformEvents } from '../../utils/events';
import { getEvents } from '../../api/api';

const EventsPage = () => {
  const data = useLoaderData();

  const events = transformEvents(data);

  return (
    <>
      <EventContainer events={events} />
    </>
  );
};

export default EventsPage;

export function loader() {
  return getEvents();
}
