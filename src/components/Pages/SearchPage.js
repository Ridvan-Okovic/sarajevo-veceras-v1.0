import { useContext, useState } from 'react';
import { filterBySearchTerm } from '../../utils/filter';
import { renderEvents } from '../../utils/events';

import SearchBar from '../Layout/SearchBar';
import EventContext from '../../context/event-context';

const SearchPage = () => {
  const ctx = useContext(EventContext);
  const events = ctx.events;

  const [searchTerm, setSearchTerm] = useState('');

  const filtered = filterBySearchTerm(events, searchTerm);
  const filteredEvents = renderEvents(filtered);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="my-16 flex flex-col items-center">
        <div className="mx-6 grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-2 sm:gap-8 md:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3">
          {searchTerm.trim() !== '' && filteredEvents}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
