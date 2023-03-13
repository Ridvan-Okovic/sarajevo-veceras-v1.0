import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  const searchChangeHandler = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-10 mt-12">
      <input
        placeholder="Search"
        onChange={searchChangeHandler}
        className="outline-[#4E10B4] border-2 border-r-0 rounded-l-lg px-4 py-2 w-[40%] h-full"
      />
      <button className="h-full px-4 bg-[#4E10B4] rounded-r-lg">
        <FaSearch className="text-xl text-white cursor-pointer" />
      </button>
    </div>
  );
};

export default SearchBar;
