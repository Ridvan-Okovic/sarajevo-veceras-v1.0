import { FaChevronLeft } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ThemeContext from '../../context/theme-context';

const SearchBar = (props) => {
  const navigate = useNavigate();
  const searchChangeHandler = (event) => {
    props.setSearchTerm(event.target.value);
  };

  const { theme } = useContext(ThemeContext);

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
          className={`text-md mr-4 flex cursor-pointer flex-row items-center justify-center rounded-lg  px-4 py-2 shadow-lg sm:mr-6 md:mr-8 md:text-lg ${
            theme === 'dark'
              ? 'bg-zinc-900 text-[#e1e1e1]'
              : 'border-[0.5px] border-[#f2f2f2] bg-white text-zinc-900'
          }`}
        >
          <FaChevronLeft />
        </motion.button>
        <input
          placeholder="Das Ist Walter..."
          onChange={searchChangeHandler}
          className={`h-full w-[80%] rounded-l-lg rounded-r-none border border-r-0   px-4 py-2  shadow-lg outline-none transition-colors focus:border-[#ffb560] lg:w-[40rem] ${
            theme === 'dark'
              ? 'border-[#363636] bg-zinc-900 text-[#FAF7FF] focus:bg-zinc-800'
              : 'border-[#f2f2f2] bg-white'
          }`}
        />
        <button className="h-full rounded-r-lg bg-[#ffb560] px-4 shadow-lg transition-all duration-150 hover:opacity-80">
          <BiSearch className="cursor-pointer text-lg text-zinc-900 md:text-2xl" />
        </button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
