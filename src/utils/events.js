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
