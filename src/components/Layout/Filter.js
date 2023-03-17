import { BsFilterRight } from 'react-icons/bs';

const Filter = (props) => {
  const handleClubCheckboxChange = (event) => {
    props.setIsClubChecked(event.target.checked);
    props.setCheckedClubValue(event.target.name);
  };

  const handlePubCheckboxChange = (event) => {
    props.setIsPubChecked(event.target.checked);
    props.setCheckedPubValue(event.target.name);
  };

  const handleOpenCheckboxChange = (event) => {
    props.setIsOpenChecked(event.target.checked);
    props.setCheckedOpenValue(event.target.name);
  };

  // const removeFilterHandler = () => {};

  return (
    <div className="flex items-center justify-center h-[5rem] shadow-lg bg-inherit">
      <div className="flex flex-row gap-10">
        <label className="font-montserrat font-semibold text-lg flex gap-4">
          Club
          <input
            className="w-4"
            type="checkbox"
            name="club"
            onChange={handleClubCheckboxChange}
          ></input>
        </label>

        <label className="font-montserrat text-lg font-semibold flex gap-4">
          Pub
          <input
            className="w-4"
            type="checkbox"
            name="pub"
            onChange={handlePubCheckboxChange}
          ></input>
        </label>

        <label className="font-montserrat text-lg font-semibold flex gap-4">
          Open Air
          <input
            className="w-4"
            type="checkbox"
            name="open air"
            onChange={handleOpenCheckboxChange}
          ></input>
        </label>
      </div>
      {/* <div onClick={removeFilterHandler} className="relative">
        <BsFilterRight className="text-2xl text-black" />
        <div className="absolute top-[0.7rem] -right-[0.2rem] w-6 border-b-2 border-black -rotate-[45deg]"></div>
      </div> */}
    </div>
  );
};

export default Filter;
