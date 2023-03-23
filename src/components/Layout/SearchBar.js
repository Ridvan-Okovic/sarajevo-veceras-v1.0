import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
  const searchChangeHandler = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full px-[10%] mt-[2rem] h-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full h-full flex flex-row items-center justify-center"
      >
        <input
          placeholder="Search..."
          onChange={searchChangeHandler}
          className="w-[80%] lg:w-[40rem] focus:border-[#F6B162] transition-colors bg-[#1e1e1e] shadow-lg text-[#FAF7FF] outline-none border-[0.1rem] border-[#363636] border-r-0 rounded-l-lg px-4 py-2 h-full"
        />
        <button className="h-full px-4 bg-[#F6B162] hover:opacity-80 transition-all duration-150 rounded-r-lg shadow-lg">
          <FaSearch className="text-xl text-[#363636] cursor-pointer" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
