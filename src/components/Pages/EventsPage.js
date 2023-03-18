import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import Filter from '../Layout/Filter';
import EventContainer from '../Event/EventContainer';

const EventsPage = () => {
  const isFilterShown = useOutletContext();
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
    <>
      {isFilterShown && (
        <Filter
          // ----------------------------------- //
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
        isClubChecked={isClubChecked}
        checkedClubValue={checkedClubValue}
        // ------------------------------------ //
        isPubChecked={isPubChecked}
        checkedPubValue={checkedPubValue}
        // ------------------------------------ //
        isOpenChecked={isOpenChecked}
        checkedOpenValue={checkedOpenValue}
      />
    </>
  );
};

export default EventsPage;