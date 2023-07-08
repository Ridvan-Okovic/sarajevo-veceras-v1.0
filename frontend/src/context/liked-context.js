import React from 'react';

const LikedContext = React.createContext({
  amount: 0,
  setAmount: () => {},
  likedEventIds: String,
});

export default LikedContext;
