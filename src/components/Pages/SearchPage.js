import { useContext, useState } from 'react';
import { filterBySearchTerm } from '../../utils/filter';

import Event from '../Event/Event';
import SearchBar from '../Layout/SearchBar';
import EventContext from '../../context/event-context';

const SearchPage = () => {
  const ctx = useContext(EventContext);
  const events = ctx.events;
  console.log(ctx.events);

  const [searchTerm, setSearchTerm] = useState('');

  // * Ovo je searchHandling funkcija
  const filtered = filterBySearchTerm(events, searchTerm);

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

  console.log(filteredEvents, searchTerm);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="my-[4rem] flex flex-col items-center">
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-8'}>
          {searchTerm !== '' && filteredEvents}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
