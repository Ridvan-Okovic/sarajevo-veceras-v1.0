import Event from '../components/Event/Event';
import LikedEvent from '../components/LikedEvents/LikedEvent';

export function transformEvents(events) {
  const transformedEvents = [];

  for (const key in events) {
    transformedEvents.push({
      id: key,
      ime: events[key].name,
      opis: events[key].description,
      vrijeme: events[key].time,
      adresa: events[key].address,
      poster: events[key].poster,
      tip: events[key].type,
      datum: new Date(events[key].date),
    });
  }

  let orderedEvents = transformedEvents.sort(
    (a, b) => Date.parse(a.datum) - Date.parse(b.datum)
  );

  return orderedEvents;
}

export function renderEvents(events) {
  return events.map((eventInfo, index) => {
    return (
      <Event
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.ime}
        opis={eventInfo.opis}
        time={eventInfo.vrijeme}
        address={eventInfo.adresa}
        date={new Date(eventInfo.datum)}
        type={eventInfo.tip}
        index={index}
      />
    );
  });
}

export function renderLikedEvents(events) {
  return events.map((eventInfo, index) => {
    return (
      <LikedEvent
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.name}
        opis={eventInfo.description}
        time={eventInfo.time}
        address={eventInfo.address}
        datum={eventInfo.datum}
        date={new Date(eventInfo.datum.seconds)}
        type={eventInfo.tip}
        index={index}
      />
    );
  });
}
