import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  const searchChangeHandler = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full px-[10%] mt-[4rem] flex flex-row items-center justify-center h-10">
      <input
        placeholder="Search..."
        onChange={searchChangeHandler}
        className="w-[40%] focus:border-[#4E10B4] outline-none border-2 border-r-0 rounded-l-lg px-4 py-2 h-full"
      />
      <button className="h-full px-4 bg-[#4E10B4] rounded-r-lg">
        <FaSearch className="text-xl text-white cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchBar;
