import { useReducer } from 'react';
import LikedContext from './liked-context';

const defaultLikedEventsState = {
  events: [],
  amount: 0,
};

const eventReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedTotalAmount;
    let updatedEvents;

    const existingEventIndex = state.events.findIndex(
      (event) => event.id === action.event.id
    );

    const existingEvent = state.events[existingEventIndex];

    if (existingEvent) {
      updatedEvents = [...state.events];
      updatedTotalAmount = state.amount;
    } else {
      updatedEvents = state.events.concat(action.event);
      updatedTotalAmount = state.amount + action.event.amount;
    }

    return {
      events: updatedEvents,
      amount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedTotalAmount;
    const existingEventIndex = state.events.findIndex(
      (event) => event.id === action.id
    );

    const existingEvent = state.events[existingEventIndex];

    let updatedEvents;

    if (existingEvent) {
      updatedEvents = state.events.filter((event) => event.id !== action.id);
      updatedTotalAmount = state.amount - 1;
    }

    return {
      events: updatedEvents,
      amount: updatedTotalAmount,
    };
  }

  return defaultLikedEventsState;
};

const LikedProvider = (props) => {
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
    amount: eventState.amount,
    addEvent: addEventToLiked,
    removeEvent: removeEventFromLiked,
  };

  return (
    <LikedContext.Provider value={eventContext}>
      {props.children}
    </LikedContext.Provider>
  );
};

export default LikedProvider;
