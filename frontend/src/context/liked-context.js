import React from 'react';

const LikedContext = React.createContext({
  likedEvents: [],
  setLikedEvents: () => {},
});

export default LikedContext;
