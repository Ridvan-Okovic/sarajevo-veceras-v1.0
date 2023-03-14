import React from 'react';

const EventContext = React.createContext({
  events: [],
  addEvent: (event) => {},
  removeEvent: (id) => {},
});

export default EventContext;
