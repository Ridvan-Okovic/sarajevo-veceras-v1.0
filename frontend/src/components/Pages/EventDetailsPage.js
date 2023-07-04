import { useNavigate, useLoaderData } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { getEventDetails } from '../../api/api';
import EventDate from '../Event/EventDate';
import { FaMapPin, FaClock, FaCalendar } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ThemeContext from '../../context/theme-context';

const EventDetailsPage = () => {
  const event = useLoaderData();

  const { theme } = useContext(ThemeContext);

  const eventDate = new Date(event.date);

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center gap-8">
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/events')}
              className={`text-md absolute top-[34px] -left-16 mr-4 flex cursor-pointer flex-row items-center justify-center rounded-lg px-4 py-2 shadow-lg sm:mr-6 md:top-10 md:-left-20 md:mr-8 md:text-lg
              ${
                theme === 'dark'
                  ? 'bg-zinc-900 text-[#e1e1e1]'
                  : 'border border-[#f2f2f2] bg-white text-zinc-900'
              }`}
            >
              <FaChevronLeft />
            </motion.button>

            <h1
              className={`my-8 text-3xl capitalize tracking-wide text-[#e1e1e1] md:text-5xl ${
                theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
              }`}
            >
              {event.description}
            </h1>
          </div>
        </div>
        <img
          src={event.poster}
          alt="slika_eventa"
          className="max-w-[30rem] rounded-lg shadow-lg md:max-w-[40rem]"
        />
        <div
          className={`mt-4 flex flex-col space-y-2 md:space-y-4 ${
            theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
          }`}
        >
          <h1 className=" flex flex-row items-center justify-center gap-2 text-center text-xl  md:gap-4 md:text-3xl">
            <MdCelebration className="text-[#ffb560]" />
            {event.name}
          </h1>
          <h1 className=" flex flex-row items-center justify-center gap-2 text-center text-xl md:gap-4 md:text-3xl">
            <FaMapPin className="text-[#ffb560]" />
            {event.address}
          </h1>
          <h1 className=" flex flex-row items-center justify-center gap-2 text-center text-xl md:gap-4 md:text-3xl ">
            <FaClock className="text-[#ffb560]" />
            {event.time}
          </h1>
          <div className="flex items-center justify-center  gap-2 text-xl md:gap-4 md:text-3xl">
            <FaCalendar className="text-[#ffb560]" />
            <EventDate datum={eventDate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailsPage;

export function loader({ params }) {
  const eventId = params.eventId;
  return getEventDetails(eventId);
}
