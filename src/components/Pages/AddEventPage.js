import { motion } from 'framer-motion';

const AddEventPage = () => {
  return (
    <div className="w-full grid place-items-center mt-16 text-[#e1e1e1]">
      <div className="w-[32rem] bg-zinc-900 border-zinc-800 shadow-lg rounded-lg px-4">
        <form className="flex flex-col space-y-4 w-full px-4 py-6 ">
          <div className="flex flex-col gap-1">
            <label className="text-xl">Lokacija</label>
            <input
              placeholder="Sloga, Dorian Gray..."
              className="bg-zinc-800 px-2 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Opis</label>
            <input
              placeholder="DJ Nimra..."
              className="bg-zinc-800 px-2 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Adresa</label>
            <input
              placeholder="Mehmeda Spahe, 20"
              className="bg-zinc-800 px-2 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Vrijeme</label>
            <input
              type="time"
              className="bg-zinc-800 px-2 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xl">Datum</label>
            <input
              type="date"
              className="bg-zinc-800 px-2 placeholder:text-[#e1e1e1] text-[#e1e1e1] rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Tip</label>
            <input
              placeholder="Pub, club..."
              className="bg-zinc-800 px-2 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Slika</label>
            <input
              placeholder="Link slike (https://...)"
              className="bg-zinc-800 px-2 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-24 bg-zinc-800 mt-8 shadow-md rounded-lg py-1"
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
