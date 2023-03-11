import { FaMapPin, FaCalendar, FaClock } from 'react-icons/fa';
import { MdOutlineRemoveCircle, MdCelebration } from 'react-icons/md';
import EventDate from '../Event/EventDate';

const LikedEvent = (props) => {
  return (
    <div className="max-w-[20rem] font-montserrat shadow-[0px_10px_15px_rgba(0,0,0,0.2)] rounded-xl hover:scale-[1.02] transition-all duration-300 bg-white overflow-hidden">
      <div className="w-full">
        <img src={props.poster} alt="Mjesto" />
      </div>

      <h2 className="text-center text-2xl mt-4 mb-2 font-semibold text-black">
        {props.name}
      </h2>

      <div className="flex flex-col mx-[10%] text-lg font-light">
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-black border-gray-300">
          <MdCelebration className="text-[#4E10B4] mr-2" />
          {props.opis}
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-black border-gray-300">
          <FaMapPin className="text-[#4E10B4] mr-2" />
          {props.address}
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-black border-gray-300">
          <FaClock className="text-[#4E10B4] mr-2" />
          {props.time}
        </h3>
        <h3 className="flex flex-row items-center border-b-[1px] text-black border-gray-300">
          <FaCalendar className="text-[#4E10B4] mr-2" />
          <EventDate datum={props.date} />
        </h3>
      </div>
      <div className="px-[10%] flex justify-center">
        <button className="flex text-white justify-center shadow-md items-center w-full h-[2.5rem] bg-gradient-to-r from-[#4E10B4] to-[#7A3BDD] my-4 rounded-full text-lg hover:text-[#F2A6FF] hover:text-xl transition-all duration-300">
          <MdOutlineRemoveCircle />
        </button>
      </div>
    </div>
  );
};

export default LikedEvent;
