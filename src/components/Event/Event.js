import EventDate from './EventDate';
import { useContext } from 'react';
import LikedProvider from '../../context/liked-context';
import { FaMapPin, FaClock, FaCalendar, FaHeart } from 'react-icons/fa';
import { BiChevronDownCircle } from 'react-icons/bi';
import { MdCelebration } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Event = (props) => {
  const ctx = useContext(LikedProvider);

  const addEventToLiked = () => {
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
    });
  };

  return (
    <div className="w-full lg:max-w-[40rem] h-54 bg-zinc-800 font-montserrat rounded-md shadow-md flex flex-row lg:flex-row">
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
        <div className="flex items-center justify-end mx-8 h-6 gap-2">
          <FaHeart
            className=" text-[#ffb560] text-xl cursor-pointer"
            onClick={addEventToLiked}
          />
          <BiChevronDownCircle
            className=" text-[#ffb560] text-2xl cursor-pointer"
            onClick={addEventToLiked}
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
