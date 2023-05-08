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

    notify();
  };

  const likedEventsIds = ctx.events.map((eventInfo) => eventInfo.id);

  return (
    <motion.div
      transition={{ delay: 0.075 * props.index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Toaster />
      <div className="max-w-[15rem] sm:max-w-[15rem] md:max-w-[35em] md:h-60 bg-zinc-900 rounded-md shadow-md flex items-center justify-center flex-col md:flex-row relative">
        <img
          src={props.poster}
          alt="Mjesto"
          className="w-full md:w-[45%] h-[70%] sm:h-full rounded-md shadow-md aspect-auto object-cover"
        />
        <div className="w-full md:w-[55%] h-full space-y-3 lg:space-y-2 relative py-2 text-sm md:text-md lg:text-lg ">
          <h1 className="text-center text-lg md:text-2xl tracking-tight">
            <Link
              className=" text-[#ffb560] opacity-90 font-bold"
              to={`/events/place/${props.name.toLocaleLowerCase()}`}
            >
              {props.name}
            </Link>
          </h1>

          <h3 className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1] text-opacity-70 border-gray-300 lg:mx-8 mx-4">
            <MdCelebration className="text-[#ffb560] mr-2" />
            <p className="truncate font-bold text-opacity-80 text-[#e1e1e1]">
              {props.opis}
            </p>
          </h3>
          <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 lg:mx-8 mx-4">
            <FaMapPin className="text-[#ffb560] mr-2" />
            <p className="truncate">{props.address}</p>
          </h3>
          <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-opacity-70 text-[#e1e1e1]  text-opacity-70 border-gray-300 lg:mx-8 mx-4">
            <FaClock className="text-[#ffb560] mr-2" />
            {props.time}
          </h3>
          <div className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1] text-opacity-70 border-gray-300 lg:mx-8 mx-4">
            <FaCalendar className="text-[#ffb560] mr-2" />
            <EventDate datum={props.date} />
          </div>
          <div className="flex items-baseline justify-end w-full h-10 lg:px-8 px-4 gap-2 text-2xl">
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={addEventToLiked}
            >
              {likedEventsIds.includes(props.id) && (
                <FaHeart className="text-[#C25452] cursor-pointer md:text-3xl" />
              )}
              {!likedEventsIds.includes(props.id) && (
                <VscHeart className="text-[#C25452] cursor-pointer md:text-3xl" />
              )}
            </motion.button>
            <Link to={`/events/${props.id}`}>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdOutlineReadMore className="text-[#ffb560] cursor-pointer md:text-3xl" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
