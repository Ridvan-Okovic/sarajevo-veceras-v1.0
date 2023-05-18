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
      className="mt-8 h-10 w-full px-6 md:px-[10%]"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex h-full w-full flex-row items-center justify-center"
      >
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/events')}
          className="text-md mr-4 flex cursor-pointer flex-row items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 sm:mr-6 md:mr-8 md:text-lg"
        >
          <FaChevronLeft className="text-[#e1e1e1]" />
        </motion.button>
        <input
          placeholder="Das Ist Walter..."
          onChange={searchChangeHandler}
          className="h-full w-[80%] rounded-l-lg rounded-r-none border-[0.1rem] border-r-0 border-[#363636] bg-zinc-900 px-4 py-2 text-[#FAF7FF] shadow-lg outline-none transition-colors focus:border-[#ffb560] focus:bg-zinc-800 lg:w-[40rem]"
        />
        <button className="h-full rounded-r-lg bg-[#ffb560] px-4 shadow-lg transition-all duration-150 hover:opacity-80">
          <FaSearch className="cursor-pointer text-lg text-[#363636] md:text-xl" />
        </button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
