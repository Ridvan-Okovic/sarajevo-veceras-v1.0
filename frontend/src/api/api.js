import json from 'react';

import { auth, db } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const uid = localStorage.getItem('uid') || '';

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

export async function getLikedEvents() {
  await getDoc(doc(db, 'users', uid)).then((docSnap) => {
    if (docSnap.exists()) {
      if (docSnap.data().likedEvents) {
        return docSnap.data().likedEvents;
      } else {
        return [];
      }
    } else {
      throw new Error('Document does not exist.');
    }
  });
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
  const newEvent = { ...event, author: auth.currentUser.uid };
  const res = await fetch(
    `https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app/events.json`,
    {
      method: 'POST',
      body: JSON.stringify(newEvent),
      mode: 'cors',
      headers: {
        'Acces-Control-Allow-Headers': 'Content-Type',
        'Acces-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application.json',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Could not create event!');
  }
}
