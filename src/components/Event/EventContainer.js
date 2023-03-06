import { useEffect, useState } from 'react';
import Event from './Event';

const EventContainer = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let today = new Date();
  let todayString = new Date().toString().slice(0, 10);

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
          datum: new Date(data[key].date),
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
    return (
      eventInfo.datum > today ||
      eventInfo.datum.toString().slice(0, 10) === todayString
    );
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

  const checkboxFilter = eventDateFilter.filter((eventInfo) => {
    return (
      eventInfo.tip.toLocaleLowerCase() ===
        props.checkedClubValue.toLocaleLowerCase() ||
      eventInfo.tip.toLocaleLowerCase() ===
        props.checkedPubValue.toLocaleLowerCase() ||
      eventInfo.tip.toLocaleLowerCase() ===
        props.checkedOpenValue.toLocaleLowerCase()
    );
  });

  const checkboxFilteredEvents = checkboxFilter.map((eventInfo) => {
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

  if (
    (props.isClubChecked || props.isPubChecked || props.isOpenChecked) &&
    checkboxFilteredEvents.length > 0
  ) {
    content = checkboxFilteredEvents;
  }

  return (
    <div className="flex flex-row flex-wrap px-[10%] items-center justify-center gap-[3.5rem] w-full my-[4rem]">
      {content}
    </div>
  );
};

export default EventContainer;
