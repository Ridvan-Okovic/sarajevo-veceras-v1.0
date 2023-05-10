import { useContext, useState } from 'react';
import { filterBySearchTerm } from '../../utils/filter';

import Event from '../Event/Event';
import SearchBar from '../Layout/SearchBar';
import EventContext from '../../context/event-context';

const SearchPage = () => {
  const ctx = useContext(EventContext);
  const events = ctx.events;

  const [searchTerm, setSearchTerm] = useState('');

  const filtered = filterBySearchTerm(events, searchTerm);

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

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="my-[4rem] flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 gap-4 sm:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3 place-items-center md:gap-8 text-center">
          {searchTerm.trim() !== '' && filteredEvents}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
