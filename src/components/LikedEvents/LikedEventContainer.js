import { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import EventContext from '../../context/liked-context';
import LikedEvent from './LikedEvent';

const LikedEventContainer = () => {
  const navigate = useNavigate();
  const ctx = useContext(EventContext);

  const likedEvents = ctx.events.map((eventInfo) => {
    return (
      <LikedEvent
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.name}
        opis={eventInfo.description}
        time={eventInfo.time}
        address={eventInfo.address}
        date={new Date(eventInfo.date)}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center px-[10%]  bg-zinc-900 shadow-lg py-[5%] my-[4rem]">
      <div className="flex flex-col relative">
        <h3 className="text-center tracking-wider uppercase text-[#e1e1e1] text-3xl mb-8">
          Liked Events
        </h3>
        <div className="flex flex-row gap-2 items-center absolute top-[6px] justify-start text-lg">
          <FaChevronLeft
            className="cursor-pointer text-[#e1e1e1]"
            onClick={() => navigate(-1)}
          />
          <p className="font-montserrat text-[#e1e1e1] text-lg">Back </p>
        </div>
        {likedEvents.length === 0 && (
          <p className="font-montserrat font-normal text-3xl text-center text-[#e1e1e1]">
            Trenutno nemate lajkanih eventova!
          </p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {likedEvents}
        </div>
      </div>
    </div>
  );
};

export default LikedEventContainer;
