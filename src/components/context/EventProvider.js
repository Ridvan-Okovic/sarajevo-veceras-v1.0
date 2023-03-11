import React, { useState } from 'react';
import EventContext from './event-context';

const EventProvider = (props) => {
  const [likedEvents, setLikedEvents] = useState([]);
  const [isLikedShown, setIsLikedShown] = useState(false);

  const addEventsToLiked = (event) => {
    setLikedEvents({
      ...likedEvents,
      event,
    });
  };

  const setIsLikedPanelDisplayed = () => {
    setIsLikedShown((prev) => !prev);
  };

  const eventContext = {
    events: likedEvents,
    isLikedPanelShown: isLikedShown,
    addEvent: addEventsToLiked,
    setIsLikedPanelShown: setIsLikedPanelDisplayed,
  };

  return (
    <EventContext.Provider value={eventContext}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
