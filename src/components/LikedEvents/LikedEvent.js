import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin, FaCalendar, FaClock } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import LikedContext from '../../context/liked-context';
import EventDate from '../Event/EventDate';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const LikedEvent = (props) => {
  const notify = () =>
    toast.error('Event removed from liked.', { duration: 800 });

  const ctx = useContext(LikedContext);

  const removeEventFromLiked = () => {
    ctx.removeEvent(props.id);
    notify();
  };

  return (
    <motion.div
      transition={{ delay: 0.075 * props.index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Toaster />
      <div className="w-full lg:max-w-[40rem] 2xl:w-[40rem] h-56 bg-zinc-900 font-montserrat rounded-md shadow-md flex flex-row lg:flex-row">
        <img
          src={props.poster}
          alt="Mjesto"
          className="w-[45%] h-full rounded-md shadow-md aspect-auto object-cover"
        />
        <div className="w-[55%] h-full space-y-2 relative my-2">
          <h1 className="text-center text-2xl tracking-tight text-[#e1e1e1]">
            <Link to={`/events/${props.name.toLocaleLowerCase()}`}>
              {props.name}
            </Link>
          </h1>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-6 -top-2"
            onClick={removeEventFromLiked}
          >
            <TiDelete className="text-[#ffb560] hover:opacity-75 text-4xl cursor-pointer" />
          </motion.button>
          <h3 className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1] text-opacity-70 border-gray-300 mx-8">
            <MdCelebration className="text-[#ffb560] mr-2 text-lg" />
            <p className="truncate">{props.opis}</p>
          </h3>
          <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 mx-8">
            <FaMapPin className="text-[#ffb560] mr-2" />
            <p className="truncate">{props.address}</p>
          </h3>
          <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 mx-8">
            <FaClock className="text-[#ffb560] mr-2" />
            {props.time}
          </h3>
          <h3 className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 mx-8">
            <FaCalendar className="text-[#ffb560] mr-2" />
            <EventDate datum={props.date} />
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default LikedEvent;
