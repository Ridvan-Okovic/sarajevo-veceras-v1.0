import { useRef } from 'react';
import { createEvent } from '../../api/api';

import { motion } from 'framer-motion';

const AddEventPage = () => {
  const location = useRef();
  const event = useRef();
  const address = useRef();
  const time = useRef();
  const date = useRef();
  const type = useRef();
  const poster = useRef();

  const eventToAdd = {
    address: address.current,
    date: date.current,
    description: event.current,
    name: location.current,
    poster: poster.current,
    time: time.current,
    type: type.current,
  };

  return (
    <div className="mt-16 grid w-full place-items-center text-[#e1e1e1]">
      <div className="w-[32rem] rounded-lg border-zinc-800 bg-zinc-900 px-4 shadow-lg">
        <form className="flex w-full flex-col space-y-4 px-4 py-6 ">
          <div className="flex flex-col gap-1">
            <label className="text-xl">Lokacija</label>
            <input
              ref={location}
              placeholder="Sloga, Dorian Gray..."
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Opis</label>
            <input
              ref={event}
              placeholder="DJ Nimra..."
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Adresa</label>
            <input
              ref={address}
              placeholder="Mehmeda Spahe, 20"
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Vrijeme</label>
            <input
              ref={time}
              type="time"
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xl">Datum</label>
            <input
              ref={date}
              type="date"
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 text-[#e1e1e1] shadow-lg placeholder:text-[#e1e1e1]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Tip</label>
            <input
              ref={type}
              placeholder="Pub, club..."
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Slika</label>
            <input
              ref={poster}
              placeholder="Link slike (https://...)"
              className="h-8 rounded border border-gray-300 border-opacity-50 bg-zinc-800 px-2 shadow-lg"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <motion.button
              onClick={() => createEvent(eventToAdd)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="mt-8 w-24 rounded-lg bg-zinc-800 py-1 shadow-md"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventPage;
