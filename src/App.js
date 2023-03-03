import { useState } from 'react';
import EventContainer from './components/Event/EventContainer';
import Filter from './components/Layout/Filter';
import NavBar from './components/Layout/NavBar';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [checkedValue, setCheckedValue] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  // !When an event is unclicked the filter for that checkbox should be removed from the filtered array
  const onAddCheckedValue = (item) => {
    setCheckedValue((prevValue) => {
      return [...prevValue, item];
    });
  };

  console.log(checkedValue);

  return (
    <div className="w-full min-h-[100vh]">
      <NavBar
        onAddSearchTermHandler={setSearchValue}
        setIsFilterOpened={setIsFilterOpened}
      />
      {isFilterOpened && (
        <Filter
          setIsChecked={setIsChecked}
          setCheckedValue={onAddCheckedValue}
        />
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
