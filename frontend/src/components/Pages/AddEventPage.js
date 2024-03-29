import { useState, useContext } from 'react';
import { createEvent } from '../../api/api';
import ThemeContext from '../../context/theme-context';

import { motion } from 'framer-motion';

const AddEventPage = () => {
  const { theme } = useContext(ThemeContext);

  const [eventDetails, setEventDetails] = useState({
    address: '',
    date: '',
    description: '',
    name: '',
    poster: '',
    time: '',
    type: '',
  });

  const handleChange = (event) => {
    event.persist();

    setEventDetails((prevEvent) => ({
      ...prevEvent,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div
      className={`mt-16 grid w-full place-items-center text-[#e1e1e1] ${
        theme === 'dark' ? 'text-[#e1e1e1]' : 'text-zinc-900'
      }`}
    >
      <div
        className={`w-[32rem] rounded-lg  px-4${
          theme === 'dark'
            ? 'border-zinc-800 bg-zinc-900'
            : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.1)]'
        }`}
      >
        <form
          onSubmit={() => createEvent(eventDetails)}
          className="flex w-full flex-col space-y-4 px-4 py-6 "
        >
          <div className="flex flex-col gap-1">
            <label className="text-xl">Lokacija</label>
            <input
              required
              name="name"
              value={eventDetails.name}
              onChange={handleChange}
              placeholder="Sloga, Dorian Gray..."
              className={`h-8 rounded border-opacity-50 px-2 ${
                theme === 'dark'
                  ? 'border border-gray-300 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Opis</label>
            <input
              required
              name="description"
              value={eventDetails.description}
              onChange={handleChange}
              placeholder="DJ Nimra..."
              className={`h-8 rounded  border-opacity-50 px-2 ${
                theme === 'dark'
                  ? ' border border-gray-300 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Adresa</label>
            <input
              required
              name="address"
              value={eventDetails.address}
              onChange={handleChange}
              placeholder="Mehmeda Spahe, 20"
              className={`h-8 rounded border-opacity-50  px-2 ${
                theme === 'dark'
                  ? ' border border-gray-300 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Vrijeme</label>
            <input
              required
              name="time"
              value={eventDetails.time}
              onChange={handleChange}
              type="time"
              className={`h-8 rounded border-opacity-50  px-2 ${
                theme === 'dark'
                  ? ' border border-gray-300 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xl">Datum</label>
            <input
              required
              name="date"
              value={eventDetails.date}
              onChange={handleChange}
              type="date"
              className={`h-8 rounded  px-2 text-[#e1e1e1] ${
                theme === 'dark'
                  ? 'border border-gray-300 border-opacity-50 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Tip</label>
            <input
              required
              name="type"
              onChange={handleChange}
              placeholder="Pub, club..."
              className={`h-8 rounded border-opacity-50  px-2 ${
                theme === 'dark'
                  ? 'border border-gray-300 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Slika</label>
            <input
              required
              name="poster"
              value={eventDetails.poster}
              onChange={handleChange}
              placeholder="Link slike (https://...)"
              className={`h-8 rounded border-opacity-50 px-2 ${
                theme === 'dark'
                  ? 'border border-gray-300 bg-zinc-800'
                  : 'bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`mt-8 w-24 rounded-lg py-1 shadow-md ${
                theme === 'dark'
                  ? 'bg-zinc-800 text-[#e1e1e1]'
                  : 'bg-white text-zinc-900 shadow-[0_0_5px_0_rgba(0,0,0,0.07)]'
              }`}
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
