import { useNavigate, useLoaderData } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { getEventDetails } from '../../api/api';
import EventDate from '../Event/EventDate';
import { FaMapPin, FaClock, FaCalendar } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { motion } from 'framer-motion';

const EventDetailsPage = () => {
  const event = useLoaderData();

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
              className="flex flex-row mr-4 sm:mr-6 md:mr-8 bg-zinc-900 px-4 py-2 rounded-lg items-center justify-center text-md md:text-lg cursor-pointer absolute top-8 -left-16 md:top-10 md:-left-20"
            >
              <FaChevronLeft className="text-[#e1e1e1]" />
            </motion.button>

            <h1 className="text-3xl md:text-5xl my-8 tracking-wide capitalize text-[#e1e1e1]">
              {event.description}
            </h1>
          </div>
        </div>
        <img
          src={event.poster}
          alt="slika_eventa"
          className="max-w-[30rem] md:max-w-[40rem] rounded-lg shadow-lg"
        />
        <div className="flex flex-col space-y-2 md:space-y-4 mt-4">
          <h1 className=" text-xl md:text-3xl text-[#e1e1e1] text-center flex flex-row gap-2 md:gap-4 justify-center items-center">
            <MdCelebration className="text-[#ffb560]" />
            {event.name}
          </h1>
          <h1 className=" text-xl md:text-3xl text-[#e1e1e1] text-center flex flex-row gap-2 md:gap-4 justify-center items-center">
            <FaMapPin className="text-[#ffb560]" />
            {event.address}
          </h1>
          <h1 className=" text-xl md:text-3xl text-[#e1e1e1] text-center flex flex-row gap-2 md:gap-4 justify-center items-center ">
            <FaClock className="text-[#ffb560]" />
            {event.time}
          </h1>
          <div className="flex items-center justify-center  text-xl md:text-3xl text-[#e1e1e1] gap-2 md:gap-4">
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
