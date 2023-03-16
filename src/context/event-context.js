import React from 'react';

const EventContext = React.createContext({
  events: [],
  amount: 0,
  addEvent: (item) => {},
  removeEvent: (id) => {},
});

export default EventContext;
