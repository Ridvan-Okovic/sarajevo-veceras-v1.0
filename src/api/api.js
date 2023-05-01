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
