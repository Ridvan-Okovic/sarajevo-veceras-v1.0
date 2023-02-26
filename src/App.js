import { useState } from 'react';
import EventContainer from './components/Event/EventContainer';
import NavBar from './components/Layout/NavBar';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <NavBar onAddSearchTermHandler={setSearchValue} />
      <EventContainer searchValue={searchValue} />
    </>
  );
};

export default App;
