import EventDate from './EventDate';
import { useContext } from 'react';
import LikedContext from '../../context/liked-context';
import { FaMapPin, FaClock, FaCalendar, FaHeart } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { VscHeart } from 'react-icons/vsc';
import { MdOutlineReadMore } from 'react-icons/md';
import ThemeContext from '../../context/theme-context';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { auth } from '../../config/firebase-config';

const Event = (props) => {
  // const notifySuccess = () =>
  //   toast.success('Event added to liked.', { duration: 800 });

  // const notifyError = () =>
  //   toast.error('Event already added to liked', { duration: 800 });

  const ctx = useContext(LikedContext);

  const { theme } = useContext(ThemeContext);

  let likedEventsIds = ctx.events.map((eventInfo) => eventInfo.id);

  return (
    <motion.div
      transition={{ delay: 0.075 * props.index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Toaster />
      <div
        className={`relative flex h-48 max-w-[450px] flex-row items-center justify-center overflow-hidden rounded-md ${
          theme === 'dark'
            ? 'bg-zinc-900 shadow-lg'
            : 'bg-white shadow-[0_1.5px_5px_0_rgba(0,0,0,0.1)]'
        }   sm:h-full sm:max-w-[15rem] sm:flex-col md:h-[12.5rem] md:max-w-[35em] md:flex-row lg:h-60`}
      >
        <img
          src={props.poster}
          alt="Mjesto"
          className="h-full w-[50%] object-cover sm:h-full sm:w-full md:h-full md:w-[45%]"
        />

        <div
          className={`md:text-md relative h-full w-[50%] space-y-2 py-1 text-sm ${
            theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
          }  sm:w-full sm:space-y-2 sm:pt-2 md:w-[55%] md:py-2 lg:space-y-2 lg:py-2 lg:text-lg`}
        >
          <h1 className="text-center text-lg tracking-tight underline md:text-xl lg:text-2xl">
            <Link
              className="font-bold text-[#ffb560] opacity-90"
              to={`/events/place/${props.name.toLocaleLowerCase()}`}
            >
              {props.name}
            </Link>
          </h1>

          <h3 className="mx-3 flex flex-row items-center border-b-[1px] border-gray-300 border-opacity-70 text-opacity-70 sm:mx-4 lg:mx-6">
            <MdCelebration className="mr-2 text-[#ffb560]" />
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
          <h3 className="mx-3 mb-2 flex flex-row items-center border-b-[1px] border-gray-300  border-opacity-70 text-opacity-70 sm:mx-4 lg:mx-6">
            <FaClock className="mr-2 text-[#ffb560]" />
            {props.time}
          </h3>
          <div className="mx-3 flex flex-row items-center border-b-[1px] border-gray-300 border-opacity-70 text-opacity-70 sm:mx-4 lg:mx-6">
            <FaCalendar className="mr-2 text-[#ffb560]" />
            <EventDate datum={props.date} />
          </div>
          <div className="flex h-10 w-full items-baseline justify-end gap-2 px-4 text-2xl sm:py-1 md:py-0 lg:px-6 lg:py-1">
            <motion.button
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                const userRef = doc(db, 'users', auth.currentUser.uid);
                updateDoc(
                  userRef,
                  {
                    likedEvents: arrayUnion({
                      id: props.id,
                      poster: props.poster,
                      name: props.name,
                      description: props.opis,
                      address: props.address,
                      time: props.time,
                      datum: props.date,
                      tip: props.type,
                    }),
                  },
                  { merge: true }
                );
              }}
            >
              {likedEventsIds.includes(props.id) && (
                <FaHeart className="cursor-pointer text-[#C25452]" />
              )}
              {!likedEventsIds.includes(props.id) && (
                <VscHeart className="cursor-pointer text-[#C25452]" />
              )}
            </motion.button>
            <Link to={`/events/${props.id}`}>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
              >
                <MdOutlineReadMore className="cursor-pointer text-[#ffb560] md:text-2xl" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
