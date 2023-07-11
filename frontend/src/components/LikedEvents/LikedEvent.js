import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin, FaCalendar, FaClock } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import EventDate from '../Event/EventDate';
import { motion } from 'framer-motion';
import { MdOutlineReadMore } from 'react-icons/md';
import ThemeContext from '../../context/theme-context';
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import LikedContext from '../../context/liked-context';

const LikedEvent = (props) => {
  const { theme } = useContext(ThemeContext);
  const { likedEvents, setLikedEvents } = useContext(LikedContext);

  return (
    <motion.div
      transition={{ delay: 0.075 * props.index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div
        className={`${
          theme === 'dark' ? 'bg-zinc-900' : 'border-[0.5px] bg-white'
        } flex h-48
            max-w-[450px] flex-row
            items-center justify-center overflow-hidden rounded-md
        border-[#f2f2f2]  shadow-md sm:h-full sm:max-w-[15rem] sm:flex-col md:h-[12.5rem] md:max-w-[35em] md:flex-row lg:h-60`}
      >
        <img
          src={props.poster}
          alt="Mjesto"
          className="h-full w-[50%] object-cover shadow-md sm:h-full sm:w-full md:h-full md:w-[45%]"
        />

        <div
          className={`md:text-md relative h-full w-[50%] space-y-2 py-1 text-sm ${
            theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
          }  sm:w-full sm:space-y-2 sm:pt-2 md:w-[55%] md:py-2 lg:space-y-2 lg:py-2 lg:text-lg`}
        >
          <h1 className="text-center text-lg tracking-tight md:text-xl lg:text-2xl">
            <Link
              className="font-bold text-[#ffb560] underline opacity-90"
              to={`/events/place/${props.name.toLocaleLowerCase()}`}
            >
              {props.name}
            </Link>
          </h1>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-1 -top-1"
            onClick={() => {
              const userRef = doc(db, 'users', localStorage.getItem('uid'));
              updateDoc(userRef, {
                likedEvents: arrayRemove({
                  address: props.address,
                  datum: props.datum,
                  description: props.opis,
                  id: props.id,
                  name: props.name,
                  poster: props.poster,
                  time: props.time,
                  tip: props.type,
                }),
              });

              const filtertedLikedEvents = likedEvents.filter((eventInfo) => {
                return eventInfo.id !== props.id;
              });

              setLikedEvents(filtertedLikedEvents);
            }}
          >
            <TiDelete className="hidden cursor-pointer text-4xl text-[#C25452] hover:opacity-75 lg:inline-block" />
          </motion.button>
          <h3 className="mx-3 flex flex-row items-center border-b-[1px] border-gray-300 border-opacity-70  text-opacity-70 sm:mx-4 lg:mx-6">
            <MdCelebration className="mr-2 text-lg text-[#ffb560]" />
            <p
              className={`truncate font-bold ${
                theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
              }  text-opacity-80`}
            >
              {props.opis}
            </p>
          </h3>
          <h3 className="mx-3 mb-2 flex flex-row items-center border-b-[1px] border-gray-300  border-opacity-70  text-opacity-70 sm:mx-4 lg:mx-6">
            <FaMapPin className="mr-2 text-[#ffb560]" />
            <p className="truncate">{props.address}</p>
          </h3>
          <h3 className="mx-3 mb-2 flex flex-row items-center border-b-[1px] border-gray-300  border-opacity-70  text-opacity-70 sm:mx-4 lg:mx-6">
            <FaClock className="mr-2 text-[#ffb560]" />
            {props.time}
          </h3>
          <div className="mx-3 mb-2 flex flex-row items-center border-b-[1px] border-gray-300  border-opacity-70  text-opacity-70 sm:mx-4 lg:mx-6">
            <FaCalendar className="mr-2 text-[#ffb560]" />
            <EventDate datum={props.date} />
          </div>
          <div className="flex h-10 w-full items-baseline justify-end gap-1 px-4 text-2xl sm:gap-1 sm:py-1 md:py-0 lg:px-6 lg:py-1">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className=" inline-block md:inline-block lg:hidden"
              onClick={() => {
                const userRef = doc(db, 'users', localStorage.getItem('uid'));
                updateDoc(userRef, {
                  likedEvents: arrayRemove({
                    address: props.address,
                    datum: props.datum,
                    description: props.opis,
                    id: props.id,
                    name: props.name,
                    poster: props.poster,
                    time: props.time,
                    tip: props.type,
                  }),
                });
                const filtertedLikedEvents = likedEvents.filter((eventInfo) => {
                  return eventInfo.id !== props.id;
                });

                setLikedEvents(filtertedLikedEvents);
              }}
            >
              <TiDelete className="cursor-pointer text-3xl text-[#C25452] hover:opacity-75" />
            </motion.button>
            <Link to={`/events/${props.id}`}>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdOutlineReadMore className="cursor-pointer text-3xl text-[#ffb560]" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LikedEvent;
