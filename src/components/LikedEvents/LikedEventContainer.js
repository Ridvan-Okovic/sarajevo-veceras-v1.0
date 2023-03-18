import { useContext } from 'react';
import EventContext from '../../context/liked-context';
import LikedEvent from './LikedEvent';

const LikedEventContainer = () => {
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
    <>
      <div className="flex flex-row flex-wrap px-[10%] items-center justify-center gap-[3.5rem] w-full my-[4rem]">
        {content}
      </div>
    </>
  );
};

export default LikedEventContainer;
