import { useEffect, useState, useContext } from 'react';

import {
  filterByDateAscending,
  filterBycheckBoxInput,
} from '../../utils/filter';
import Event from './Event';
import SearchBar from '../Layout/SearchBar';
import EventContext from '../../context/event-context';

const EventContainer = (props) => {
  const ctx = useContext(EventContext);
  // const [events, setEvents] = useState([]);
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

      ctx.addEvents(sortedEvents);
      setIsLoading(false);
    };
    fetchEvent();
  }, []);

  const events = ctx.events;

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

  const checkboxFilter = filterBycheckBoxInput(
    dateFilter,
    props.checkedClubValue,
    props.checkedPubValue,
    props.checkedOpenValue
  );

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
    <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
      Nema pronađenih eventova. Molimo pokušajte kasnije!
    </p>
  );

  if (isLoading) {
    content = (
      <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
        Prikupljamo informacije o eventovima...
      </p>
    );
  }

  if (isSearching && filteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
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
      <p className="font-montserrat font-normal text-3xl text-[#e1e1e1]">
        Za željeni filter nema eventova!
      </p>
    );
  }

  return (
    <>
      {!isChecked && <SearchBar setSearchTerm={setSearchTerm} />}
      <div className=" px-[10%] my-[4rem] flex flex-col items-center justify-center">
        <h3 className="text-center text-3xl text-[#e1e1e1] font-montserrat uppercase tracking-wider mb-[4rem]">
          Upcoming Events
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">{content}</div>
      </div>
    </>
  );
};

export default EventContainer;
