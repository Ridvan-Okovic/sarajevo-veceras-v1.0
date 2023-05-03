import { FaSearch, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SearchBar = (props) => {
  const navigate = useNavigate();
  const searchChangeHandler = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <motion.div
      transition={{ delay: 0.075 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full px-[10%] mt-[2rem] h-10"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full h-full flex flex-row items-center justify-center"
      >
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/events')}
          className="flex flex-row mr-8 bg-zinc-900 px-4 py-2 rounded-lg items-center justify-center text-lg cursor-pointer"
        >
          <FaChevronLeft className="text-[#e1e1e1]" />
        </motion.button>
        <input
          placeholder="Search..."
          onChange={searchChangeHandler}
          className="w-[80%] lg:w-[40rem] focus:border-[#ffb560] focus:bg-zinc-800 transition-colors bg-zinc-900 shadow-lg text-[#FAF7FF] outline-none border-[0.1rem] border-[#363636] border-r-0 rounded-l-lg px-4 py-2 h-full"
        />
        <button className="h-full px-4 bg-[#ffb560] hover:opacity-80 transition-all duration-150 rounded-r-lg shadow-lg">
          <FaSearch className="text-xl text-[#363636] cursor-pointer" />
        </button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
