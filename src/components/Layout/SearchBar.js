import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  const searchChangeHandler = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <div className="group w-full mt-12 flex flex-row items-center justify-center h-10">
      <input
        placeholder="Search"
        onChange={searchChangeHandler}
        className="focus:border-[#4E10B4] outline-none border-2 border-r-0 rounded-l-lg w-[40%] px-4 py-2 gr  h-full"
      />
      <button className="h-full px-4 bg-[#4E10B4] rounded-r-lg">
        <FaSearch className="text-xl text-white cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchBar;
