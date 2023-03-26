import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin, FaCalendar, FaClock, FaTrashAlt } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import EventContext from '../../context/liked-context';
import EventDate from '../Event/EventDate';

const LikedEvent = (props) => {
  const ctx = useContext(EventContext);

  const removeEventFromLiked = () => {
    ctx.removeEvent(props.id);
  };
  return (
    <div className="w-full lg:max-w-[40rem] h-48 bg-zinc-800 font-montserrat rounded-md shadow-md flex flex-row lg:flex-row">
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
        <TiDelete
          className="absolute right-2 -top-2 text-[#ffb560] hover:opacity-75 text-3xl cursor-pointer"
          onClick={removeEventFromLiked}
        />
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
    // <div className="w-[18rem] font-montserrat shadow-[0px_10px_7px_rgba(0,0,0,0.35)] rounded-xl hover:scale-[1.01] transition-all duration-300 bg-[#1e1e1e] overflow-hidden">
    //   <div className="w-full h-44 rounded-xl mb-2 shadow-2xl">
    //     <img src={props.poster} alt="Mjesto" className="w-full h-44" />
    //   </div>
    //   <Link to={`/events/${props.name.toLocaleLowerCase()}`}>
    //     <h2 className="text-center text-2xl truncate px-[1rem] font-montserrat tracking-wide text-[#e1e1e1]">
    //       {props.name}
    //     </h2>
    //   </Link>

    //   <div className="flex flex-col mx-[10%] text-lg font-normal">
    //     <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-[#e1e1e1] text-opacity-70 border-gray-300">
    //       <MdCelebration className="text-[#ffb560] mr-2 text-lg" />
    //       <p className="truncate">{props.opis}</p>
    //     </h3>
    //     <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-[#e1e1e1]  text-opacity-70 border-gray-300">
    //       <FaMapPin className="text-[#ffb560] mr-2" />
    //       <p className="truncate">{props.address}</p>
    //     </h3>
    //     <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-[#e1e1e1]  text-opacity-70 border-gray-300">
    //       <FaClock className="text-[#ffb560] mr-2" />
    //       {props.time}
    //     </h3>
    //     <h3 className="flex flex-row items-center border-b-[1px] text-[#e1e1e1]  text-opacity-70 border-gray-300">
    //       <FaCalendar className="text-[#ffb560] mr-2" />
    //       <EventDate datum={props.date} />
    //     </h3>
    //   </div>
    //   <div className="px-[10%] flex justify-center">
    //     <button
    //       onClick={removeEventFromLiked}
    //       className="flex text-black justify-center shadow-md items-center w-full h-[2.5rem] bg-[#ffb560] hover:opacity-80 transition-all duration-150 my-4 rounded-full text-lg"
    //     >
    //       <FaTrashAlt />
    //     </button>
    //   </div>
    // </div>
  );
};

export default LikedEvent;
