import { useContext, useState } from 'react';
import { filterByDateAscending, filterBySearchTerm } from '../../utils/filter';
import { renderEvents } from '../../utils/events';

import SearchBar from '../Layout/SearchBar';
import EventContext from '../../context/event-context';
import ThemeContext from '../../context/theme-context';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const ctx = useContext(EventContext);
  const events = ctx.events;

  const { theme } = useContext(ThemeContext);

  const dateFilteredEvents = filterByDateAscending(events);
  const featuredEvents = renderEvents(dateFilteredEvents);
  const filtered = filterBySearchTerm(dateFilteredEvents, searchTerm);
  const filteredEvents = renderEvents(filtered);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="flex flex-col items-center">
        <h3
          className={`mt-8 mb-8 font-montserrat text-3xl font-normal tracking-wide  sm:text-4xl md:text-5xl ${
            theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
          }`}
        >
          Featured
        </h3>
        <div className="mx-6 grid grid-cols-1 place-items-center gap-4 text-center sm:grid-cols-2 sm:gap-8 md:gap-8 md:px-8 xl:px-12 2xl:grid-cols-3">
          {searchTerm.trim() !== '' &&
            filteredEvents.length > 0 &&
            filteredEvents}
          {searchTerm.trim() === '' && featuredEvents}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
