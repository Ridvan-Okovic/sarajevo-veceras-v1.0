import { useReducer } from 'react';
import EventContext from './event-context';

const defaultLikedEventsState = {
  events: [],
};

const eventReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedEvents;

    const existingEventIndex = state.events.findIndex(
      (event) => event.id === action.event.id
    );

    const existingEvent = state.events[existingEventIndex];

    if (existingEvent) {
      updatedEvents = [...state.events];
    } else {
      updatedEvents = state.events.concat(action.event);
    }

    return {
      events: updatedEvents,
    };
  }

  if (action.type === 'REMOVE') {
    const existingEventIndex = state.events.findIndex(
      (event) => event.id === action.id
    );

    const existingEvent = state.events[existingEventIndex];

    let updatedEvents;

    if (existingEvent) {
      updatedEvents = state.events.filter((event) => event.id !== action.id);
    }

    return {
      events: updatedEvents,
    };
  }

  return defaultLikedEventsState;
};

const EventProvider = (props) => {
  const [eventState, dispatchEventAction] = useReducer(
    eventReducer,
    defaultLikedEventsState
  );

  const addEventToLiked = (event) => {
    dispatchEventAction({ type: 'ADD', event: event });
  };

  const removeEventFromLiked = (id) => {
    dispatchEventAction({ type: 'REMOVE', id: id });
  };

  const eventContext = {
    events: eventState.events,
    addEvent: addEventToLiked,
    removeEvent: removeEventFromLiked,
  };

  return (
    <EventContext.Provider value={eventContext}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventProvider;
