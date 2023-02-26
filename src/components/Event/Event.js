import React from 'react';
import EventDate from './EventDate';
import { FaMapPin, FaClock, FaCalendar } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';

const Event = (props) => {
  return (
    <div className="w-[20rem] font-montserrat shadow-[0px_10px_15px_rgba(0,0,0,0.2)] rounded-xl hover:scale-[1.02] transition-all duration-300">
      <img className="rounded-t-lg" src={props.poster} alt="Mjesto" />

      <h2 className="text-center mx-[10%] text-2xl mt-4 mb-2 font-bold">
        {props.name}
      </h2>

      <div className="flex flex-col mx-[10%] text-lg font-light">
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-gray-400">
          <MdCelebration className="text-[#e14658] mr-2" />
          {props.opis}
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-gray-400">
          <FaMapPin className="text-[#e14658] mr-2" />
          {props.address}
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] border-gray-400">
          <FaClock className="text-[#e14658] mr-2" />
          {props.time}
        </h3>
        <h3 className="flex flex-row items-center border-b-[1px] border-gray-400">
          <FaCalendar className="text-[#e14658] mr-2" />
          <EventDate datum={props.date} />
        </h3>
      </div>
      <div className="px-[10%]">
        <button className="w-full h-[2.2rem] bg-[#e14658] my-4 rounded-full font-normal">
          Dodaj u favorite
        </button>
      </div>
    </div>
  );
};

export default Event;
