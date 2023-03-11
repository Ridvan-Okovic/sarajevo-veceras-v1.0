import React from 'react';

const EventContext = React.createContext({
  events: [],
  isLikedPanelShown: false,
  setIsLikedPanelShown: () => {},
  addEvent: (event) => {},
});

export default EventContext;
