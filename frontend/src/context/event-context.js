import React from 'react';

const EventContext = React.createContext({
  events: [],
  addEvents: () => {},
});

export default EventContext;
