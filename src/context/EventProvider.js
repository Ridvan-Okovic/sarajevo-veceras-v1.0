import React, { useState } from 'react';
import EventContext from './event-context';

const EventProvider = (props) => {
  const [likedEvents, setLikedEvents] = useState([]);

  const addEventsToLiked = (event) => {
    setLikedEvents([event, ...likedEvents]);
  };

  const eventContext = {
    events: likedEvents,
    addEvent: addEventsToLiked,
  };

  return (
    <EventContext.Provider value={eventContext}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
