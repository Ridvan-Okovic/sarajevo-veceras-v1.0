import React from 'react';

const LikedContext = React.createContext({
  events: [],
  amount: 0,
  addEvent: (item) => {},
  removeEvent: (id) => {},
});

export default LikedContext;
