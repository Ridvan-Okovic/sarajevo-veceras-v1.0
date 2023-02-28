import { useState } from 'react';
import EventContainer from './components/Event/EventContainer';
import Filter from './components/Layout/Filter';
import NavBar from './components/Layout/NavBar';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  return (
    <div className="w-full min-h-[100vh]">
      <NavBar
        onAddSearchTermHandler={setSearchValue}
        setIsFilterOpened={setIsFilterOpened}
      />
      {isFilterOpened && <Filter />}
      <EventContainer searchValue={searchValue} />
    </div>
  );
};

export default App;
