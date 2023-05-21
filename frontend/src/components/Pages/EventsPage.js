import { useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventContainer from '../Event/EventContainer';
import { getEvents } from '../../api/api';

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <h1 className="mt-8 text-center font-manrope text-4xl text-[#e1e1e1]">
            Loading events...
          </h1>
        }
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventContainer events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventsPage;

export function loader() {
  return defer({
    events: getEvents(),
  });
}
