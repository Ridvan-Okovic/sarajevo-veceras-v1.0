import json from 'react';

export async function getEvents() {
  const res = await fetch(
    'https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  );

  if (!res.ok) {
    throw json({ message: 'Could not fetch events!' }, { status: 500 });
  } else {
    const resData = await res.json();
    return resData;
  }
}

export async function getEventDetails(eventId) {
  const res = await fetch(
    `https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`
  );

  if (!res.ok) {
    throw json({ message: 'Could not fetch event!' }, { status: 500 });
  }

  return res;
}

export async function createEvent(event) {
  const res = await fetch(
    `https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app/events/${Math.random()}.json`,
    {
      method: 'POST',
      body: JSON.stringify({
        address: event.address,
        date: event.date,
        description: event.description,
        name: event.name,
        poster: event.poster,
        time: event.time,
        type: event.type,
      }),
    }
  );

  if (!res.ok) {
    throw new Error('Could not create event!');
  }
}
