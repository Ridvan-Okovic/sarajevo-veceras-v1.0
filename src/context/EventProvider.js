import { useState } from 'react';

import EventContext from './event-context';

const EventProvider = (props) => {
  const [events, setEvents] = useState([]);

  const addEvents = (events) => {
    setEvents(events);
  };

  const eventContext = {
    events: events,
    addEvents: addEvents,
  };

  return (
    <EventContext.Provider value={eventContext}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
