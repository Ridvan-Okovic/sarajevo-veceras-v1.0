import { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import EventContext from '../../context/liked-context';
import LikedEvent from './LikedEvent';

const LikedEventContainer = () => {
  const navigate = useNavigate();
  const ctx = useContext(EventContext);

  let content = (
    <p className="font-montserrat font-normal text-3xl">
      Trenutno nemate lajkanih eventova
    </p>
  );

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

  if (likedEvents.length > 0) {
    content = likedEvents;
  }

  return (
    <div className="flex flex-col items-center justify-center px-[10%] mt-[4rem]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 items-center justify-start w-full mb-8 text-xl">
          <FaChevronLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <p className="font-montserrat">Nazad</p>
        </div>
        <div className="flex flex-row gap-8">{content}</div>
      </div>
    </div>
  );
};

export default LikedEventContainer;
