import React from 'react';

const EventContext = React.createContext({
  events: [],
  addEvent: (item) => {},
  removeEvent: (id) => {},
});

export default EventContext;
