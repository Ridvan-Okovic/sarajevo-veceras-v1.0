import { useState } from 'react';
import LikedContext from './liked-context';

const LikedProvider = (props) => {
  const [likedEvents, setLikedEvents] = useState([]);
  const eventContext = {
    likedEvents,
    setLikedEvents,
  };

  return (
    <LikedContext.Provider value={eventContext}>
      {props.children}
    </LikedContext.Provider>
  );
};

export default LikedProvider;
