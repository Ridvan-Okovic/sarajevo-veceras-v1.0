import EventDate from './EventDate';
import { useContext, useState } from 'react';
import LikedContext from '../../context/liked-context';
import { FaMapPin, FaClock, FaCalendar, FaHeart } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { VscHeart } from 'react-icons/vsc';
import { CiCircleMore } from 'react-icons/ci';

const Event = (props) => {
  const [active, setActive] = useState(false);

  const notify = () =>
    toast.success('Event added to liked.', { duration: 800 });

  const ctx = useContext(LikedContext);

  const addEventToLiked = () => {
    setActive(true);
    ctx.addEvent({
      key: props.id,
      id: props.id,
      poster: props.poster,
      name: props.name,
      description: props.opis,
      address: props.address,
      time: props.time,
      date: props.date,
      amount: 1,
      tip: props.tip,
      index: props.index,
    });

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
      <div className="w-full max-w-[35em] h-56 bg-zinc-900 rounded-md shadow-md flex flex-row lg:flex-row">
        <img
          src={props.poster}
          alt="Mjesto"
          className="w-[45%] h-full rounded-md shadow-md aspect-auto object-cover"
        />
        <div className="w-[55%] h-full space-y-2 relative my-2">
          <h1 className="text-center text-2xl tracking-tight text-[#e1e1e1]">
            <Link to={`/events/place/${props.name.toLocaleLowerCase()}`}>
              {props.name}
            </Link>
          </h1>

          <h3 className="flex flex-row items-center border-b-[1px] border-opacity-70 text-[#e1e1e1] text-opacity-70 border-gray-300 mx-8">
            <MdCelebration className="text-[#ffb560] mr-2 text-lg" />
            <p className="truncate text-lg font-semibold">{props.opis}</p>
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
          <div className="flex items-baseline justify-end w-full h-10 px-8 gap-2">
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={addEventToLiked}
            >
              {active ? (
                <FaHeart className="text-[#ffb560] cursor-pointer text-3xl" />
              ) : (
                <VscHeart className="text-[#ffb560] cursor-pointer text-3xl" />
              )}
            </motion.button>
            <Link to={`/events/${props.id}`}>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
              >
                <CiCircleMore className="text-[#ffb560] cursor-pointer text-3xl" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
