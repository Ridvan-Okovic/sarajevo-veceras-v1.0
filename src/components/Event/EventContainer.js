import { useEffect, useState } from 'react';

import { filterByDateAscending } from '../../utils/filter';
import Event from './Event';
import SearchBar from '../Layout/SearchBar';

const EventContainer = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const isChecked =
    props.isClubChecked || props.isPubChecked || props.isOpenChecked;

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

  let isSearching = false;

  if (searchTerm.trim() !== '') {
    isSearching = true;
  }

  // * Ovdje gledam da je datum veci od danasnjeg datuma
  const dateFilter = filterByDateAscending(events);

  const eventsByDate = dateFilter.map((eventInfo) => {
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

  const checkboxFilter = dateFilter.filter((eventInfo) => {
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

  // * Ovo je searchHandling funkcija
  const filtered = dateFilter.filter((eventInfo) => {
    return eventInfo.ime
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
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

  if (isLoading) {
    content = (
      <p className="font-montserrat font-normal text-3xl">
        Prikupljamo informacije o eventovima...
      </p>
    );
  }

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

  if (!isLoading && !isSearching) {
    content = eventsByDate;
  }

  if (isChecked && checkboxFilteredEvents.length > 0) {
    content = checkboxFilteredEvents;
  }

  if (isChecked && checkboxFilteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl">
        Za željeni filter nema eventova!
      </p>
    );
  }

  return (
    <>
      {!isChecked && <SearchBar setSearchTerm={setSearchTerm} />}
      <div className="flex flex-row flex-wrap px-[10%] items-center justify-center gap-[3.5rem] w-full my-[2rem]">
        {content}
      </div>
    </>
  );
};

export default EventContainer;
