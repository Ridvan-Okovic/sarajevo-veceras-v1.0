import { useState } from 'react';

const Filter = (props) => {
  // *Todo fix filtering so that when a single checkbox is clicked false its discarded from the filtered array
  const [checked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked((prev) => !prev);
    props.setCheckedValue(e.target.name);
    props.setIsChecked(e.target.checked);
  };

  return (
    <div className="flex items-center justify-center h-[7rem] shadow-xl bg-inherit">
      <div className="flex flex-row gap-4">
        <label className="font-montserrat text-md font-normal flex gap-4">
          Club
          <input
            type="checkbox"
            name="club"
            value={checked}
            onChange={handleCheckboxChange}
          ></input>
        </label>
        <label className="font-montserrat text-md font-normal flex gap-4">
          Pub
          <input
            type="checkbox"
            name="pub"
            value={checked}
            onChange={handleCheckboxChange}
          ></input>
        </label>
        <label className="font-montserrat text-md font-normal flex gap-4">
          Open Air
          <input
            type="checkbox"
            name="open air"
            value={checked}
            onChange={handleCheckboxChange}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default Filter;
