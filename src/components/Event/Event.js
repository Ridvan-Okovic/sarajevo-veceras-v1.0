import EventDate from './EventDate';
import { useContext } from 'react';
import LikedProvider from '../../context/liked-context';
import { FaMapPin, FaClock, FaCalendar, FaHeart } from 'react-icons/fa';
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
    <div className="w-[18rem] font-montserrat shadow-[0px_10px_7px_rgba(0,0,0,0.35)] rounded-xl hover:scale-[1.01] transition-all duration-300 bg-[#1e1e1e] overflow-hidden">
      <div className="w-full h-44 rounded-xl mb-2 shadow-2xl">
        <img src={props.poster} alt="Mjesto" className="w-full h-44" />
      </div>
      <Link to={`/events/${props.name.toLocaleLowerCase()}`}>
        <h2 className="text-center text-2xl truncate px-[1rem] font-montserrat tracking-wide text-[#e1e1e1]">
          {props.name}
        </h2>
      </Link>

      <div className="flex flex-col mx-[10%] text-lg font-normal">
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-[#e1e1e1] text-opacity-70 border-gray-300">
          <MdCelebration className="text-[#ffb560] mr-2 text-lg" />
          <p className="truncate">{props.opis}</p>
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-[#e1e1e1]  text-opacity-70 border-gray-300">
          <FaMapPin className="text-[#ffb560] mr-2" />
          <p className="truncate">{props.address}</p>
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-[#e1e1e1]  text-opacity-70 border-gray-300">
          <FaClock className="text-[#ffb560] mr-2" />
          {props.time}
        </h3>
        <h3 className="flex flex-row items-center border-b-[1px] text-[#e1e1e1]  text-opacity-70 border-gray-300">
          <FaCalendar className="text-[#ffb560] mr-2" />
          <EventDate datum={props.date} />
        </h3>
      </div>
      <div className="px-[10%] flex justify-center">
        <button
          onClick={addEventToLiked}
          className="flex text-black justify-center shadow-md items-center w-full h-[2.5rem] bg-[#ffb560] hover:opacity-80 transition-all duration-150 my-4 rounded-full text-lg"
        >
          <FaHeart className="" />
        </button>
      </div>
    </div>
  );
};

export default Event;
