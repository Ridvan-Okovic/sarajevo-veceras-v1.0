import EventDate from './EventDate';
import { useContext } from 'react';
import LikedContext from '../../context/liked-context';
import { FaMapPin, FaClock, FaCalendar, FaHeart } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { VscHeart } from 'react-icons/vsc';
import { MdOutlineReadMore } from 'react-icons/md';

const Event = (props) => {
  const notify = () =>
    toast.success('Event added to liked.', { duration: 800 });

  const ctx = useContext(LikedContext);

  const likedEventsIds = ctx.events.map((eventInfo) => eventInfo.id);

  const addEventToLiked = () => {
    ctx.addEvent({
      key: props.id,
      id: props.id,
      poster: props.poster,
      name: props.name,
      description: props.opis,
      address: props.address,
      time: props.time,
      datum: props.date,
      amount: 1,
      tip: props.tip,
      index: props.index,
    });

    if (!likedEventsIds.includes(props.id)) {
      notify();
    }
  };

  return (
    <motion.div
      transition={{ delay: 0.075 * props.index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Toaster />
      <div className="flex flex-row max-w-[450px] sm:max-w-[15rem] md:max-w-[35em] h-48 sm:h-full md:h-[12.5rem] lg:h-60 bg-zinc-900 rounded-md shadow-md items-center justify-center sm:flex-col md:flex-row relative overflow-hidden">
        <img
          src={props.poster}
          alt="Mjesto"
          className="w-[50%] h-full sm:w-full md:w-[45%] sm:h-full md:h-full shadow-md object-cover"
        />

        <div className="w-[50%] sm:w-full md:w-[55%] h-full py-1 space-y-2 sm:space-y-2 lg:space-y-2 relative text-sm md:text-md sm:pt-2 md:py-2 lg:text-lg lg:py-2 ">
          <h1 className="text-center text-lg md:text-xl lg:text-2xl tracking-tight">
            <Link
              className=" text-[#ffb560] opacity-90 font-bold"
              to={`/events/place/${props.name.toLocaleLowerCase()}`}
            >
              {props.name}
            </Link>
          </h1>

          <h3 className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1] text-opacity-70 border-gray-300 mx-3 lg:mx-6 sm:mx-4">
            <MdCelebration className="text-[#ffb560] mr-2" />
            <p className="truncate font-bold text-opacity-80 text-[#e1e1e1]">
              {props.opis}
            </p>
          </h3>
          <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 lg:mx-6 sm:mx-4 mx-3">
            <FaMapPin className="text-[#ffb560] mr-2" />
            <p className="truncate">{props.address}</p>
          </h3>
          <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 lg:mx-6 mx-3 sm:mx-4">
            <FaClock className="text-[#ffb560] mr-2" />
            {props.time}
          </h3>
          <div className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1] text-opacity-70 border-gray-300 lg:mx-6 sm:mx-4 mx-3">
            <FaCalendar className="text-[#ffb560] mr-2" />
            <EventDate datum={props.date} />
          </div>
          <div className="flex items-baseline justify-end w-full h-10 lg:px-6 px-4 gap-2 text-2xl sm:py-1 md:py-0 lg:py-1">
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={addEventToLiked}
            >
              {likedEventsIds.includes(props.id) && (
                <FaHeart className="text-[#C25452] cursor-pointer" />
              )}
              {!likedEventsIds.includes(props.id) && (
                <VscHeart className="text-[#C25452] cursor-pointer" />
              )}
            </motion.button>
            <Link to={`/events/${props.id}`}>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdOutlineReadMore className="text-[#ffb560] cursor-pointer md:text-2xl" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
