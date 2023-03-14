import { useReducer } from 'react';
import EventContext from './event-context';

const EventProvider = (props) => {
  useReducer();
  const eventContext = '';

  return (
    <EventContext.Provider value={eventContext}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
