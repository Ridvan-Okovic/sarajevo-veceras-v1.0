import { useState } from 'react';
import EventContainer from './components/Event/EventContainer';
import NavBar from './components/Layout/NavBar';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="w-full min-h-[100vh]">
      <NavBar onAddSearchTermHandler={setSearchValue} />
      <EventContainer searchValue={searchValue} />
    </div>
  );
};

export default App;
