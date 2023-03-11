import { useState, useEffect } from 'react';
import EventContainer from './components/Event/EventContainer';
import Filter from './components/Layout/Filter';
import NavBar from './components/Layout/NavBar';
import EventProvider from './components/context/EventProvider';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  // * Checkbox logic for club
  const [isClubChecked, setIsClubChecked] = useState(false);
  const [checkedClubValue, setCheckedClubValue] = useState('');

  // * Checkbox logic for pub
  const [isPubChecked, setIsPubChecked] = useState(false);
  const [checkedPubValue, setCheckedPubValue] = useState('');

  // * Checkbox logic for club
  const [isOpenChecked, setIsOpenChecked] = useState(false);
  const [checkedOpenValue, setCheckedOpenValue] = useState('');

  // * Reset checkbox logic
  const resetClubCheckboxHandler = (isChecked) => {
    if (isChecked === false) {
      setCheckedClubValue('');
    }
  };

  const resetPubCheckboxHandler = (isChecked) => {
    if (isChecked === false) {
      setCheckedPubValue('');
    }
  };

  const resetOpenCheckboxHandler = (isChecked) => {
    if (isChecked === false) {
      setCheckedOpenValue('');
    }
  };

  // * Resetting the checkbox name value after it has been de-selected
  useEffect(() => {
    resetClubCheckboxHandler(isClubChecked);
    resetOpenCheckboxHandler(isOpenChecked);
    resetPubCheckboxHandler(isPubChecked);
  }, [isClubChecked, isPubChecked, isOpenChecked]);

  return (
    <EventProvider>
      <NavBar
        onAddSearchTermHandler={setSearchValue}
        setIsFilterOpened={setIsFilterOpened}
      />
      {isFilterOpened && (
        <Filter
          setIsPubChecked={setIsPubChecked}
          setCheckedPubValue={setCheckedPubValue}
          // ----------------------------------- //
          setIsClubChecked={setIsClubChecked}
          setCheckedClubValue={setCheckedClubValue}
          // ----------------------------------- //
          setIsOpenChecked={setIsOpenChecked}
          setCheckedOpenValue={setCheckedOpenValue}
        />
      )}
      <EventContainer
        searchValue={searchValue}
        // ------------------------------------ //
        isClubChecked={isClubChecked}
        checkedClubValue={checkedClubValue}
        // ------------------------------------ //
        isPubChecked={isPubChecked}
        checkedPubValue={checkedPubValue}
        // ------------------------------------ //
        isOpenChecked={isOpenChecked}
        checkedOpenValue={checkedOpenValue}
      />
    </EventProvider>
  );
};

export default App;
