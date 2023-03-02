import React from 'react';
import EventDate from './EventDate';
import { FaMapPin, FaClock, FaCalendar, FaHeart } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';

const Event = (props) => {
  return (
    <div className="w-[20rem] font-montserrat shadow-[0px_10px_15px_rgba(0,0,0,0.2)] rounded-xl hover:scale-[1.02] transition-all duration-300 bg-[#FAF8FF]">
      <div className="w-full h-[213.5px]">
        <img
          className="rounded-t-lg object-contain"
          src={props.poster}
          alt="Mjesto"
        />
      </div>

      <h2 className="text-center mx-[10%] text-2xl mt-4 mb-2 font-semibold text-[#000]">
        {props.name}
      </h2>

      <div className="flex flex-col mx-[10%] text-lg font-light">
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-black border-gray-300">
          <MdCelebration className="text-[#ACA7CB] mr-2" />
          {props.opis}
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-black border-gray-300">
          <FaMapPin className="text-[#ACA7CB] mr-2" />
          {props.address}
        </h3>
        <h3 className="flex flex-row items-center mb-2 border-b-[1px] text-black border-gray-300">
          <FaClock className="text-[#ACA7CB] mr-2" />
          {props.time}
        </h3>
        <h3 className="flex flex-row items-center border-b-[1px] text-black border-gray-300">
          <FaCalendar className="text-[#ACA7CB] mr-2" />
          <EventDate datum={props.date} />
        </h3>
      </div>
      <div className="px-[10%] flex justify-center">
        <button className="flex text-[#fff] justify-center shadow-md items-center w-full h-[2.5rem] bg-[#ACA7CB] my-4 rounded-full text-lg hover:text-[#474554] hover:text-xl transition-all duration-300">
          <FaHeart className="" />
        </button>
      </div>
    </div>
  );
};

export default Event;
