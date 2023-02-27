import { useEffect, useState } from 'react';
import Event from './Event';

const EventContainer = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date();

  const URL =
    'https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app/events.json';

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();

      const loadedEvents = [];

      for (const key in data) {
        loadedEvents.push({
          id: key,
          ime: data[key].name,
          opis: data[key].description,
          vrijeme: data[key].time,
          adresa: data[key].address,
          poster: data[key].poster,
          tip: data[key].type,
          datum: data[key].date,
        });
      }

      let sortedEvents = loadedEvents.sort(
        (a, b) => Date.parse(a.datum) - Date.parse(b.datum)
      );

      setEvents(sortedEvents);
      setIsLoading(false);
    };
    fetchEvent();
  }, []);

  let searchValue = props.searchValue;

  let isSearching = false;

  if (searchValue.trim() !== '') {
    isSearching = true;
  }

  // * Ovdje gledam da je datum veci od danasnjeg datuma
  const eventDateFilter = events.filter((eventInfo) => {
    return new Date(eventInfo.datum) >= today;
  });

  const event = eventDateFilter.map((eventInfo) => {
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
      />
    );
  });

  // * Ovo je searchHandling funkcija
  const filtered = eventDateFilter.filter((eventInfo) => {
    return eventInfo.ime
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  // * Ovdje filtriram eventove po search term
  const filteredEvents = filtered.map((eventInfo) => {
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
      />
    );
  });

  let content = (
    <p className="font-montserrat font-normal text-3xl">
      Nema pronađenih eventova. Molimo pokušajte kasnije!
    </p>
  );

  if (isSearching && filteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl">
        Pokušajte drugo mjesto.
      </p>
    );
  }

  if (isSearching && filteredEvents.length > 0) {
    content = filteredEvents;
  }

  if (isLoading) {
    content = (
      <p className="font-montserrat font-normal text-3xl">
        Prikupljamo informacije o eventovima...
      </p>
    );
  }

  if (!isLoading && !isSearching) {
    content = event;
  }

  return (
    <div className="flex flex-row flex-wrap px-[10%] items-center justify-center gap-[3.5rem] my-[4rem] w-full">
      {content}
    </div>
  );
};

export default EventContainer;
