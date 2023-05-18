import { useContext } from 'react';
import LikedContext from '../../context/liked-context';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const LikedEventsCalendarPage = () => {
  const navigate = useNavigate();
  const ctx = useContext(LikedContext);
  const likedEvents = ctx.events;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-8">
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate('/events')}
          className="flex cursor-pointer flex-row items-center justify-center gap-1 rounded-lg bg-zinc-900 px-4 py-2 text-lg"
        >
          <FaChevronLeft className="text-[#e1e1e1]" />
        </motion.button>
        <h1 className="my-8 text-5xl capitalize tracking-wide text-[#e1e1e1]">
          Calendar
        </h1>
      </div>
      <Calendar />
    </div>
  );
};

export default LikedEventsCalendarPage;
