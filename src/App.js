import { useState } from 'react';
import EventContainer from './components/Event/EventContainer';
import Filter from './components/Layout/Filter';
import NavBar from './components/Layout/NavBar';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [checkedValue, setCheckedValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  console.log(isChecked);

  return (
    <div className="w-full min-h-[100vh]">
      <NavBar
        onAddSearchTermHandler={setSearchValue}
        setIsFilterOpened={setIsFilterOpened}
      />
      {isFilterOpened && (
        <Filter setIsChecked={setIsChecked} setCheckedValue={setCheckedValue} />
      )}
      <EventContainer
        isChecked={isChecked}
        checkedValue={checkedValue}
        searchValue={searchValue}
      />
    </div>
  );
};

export default App;
