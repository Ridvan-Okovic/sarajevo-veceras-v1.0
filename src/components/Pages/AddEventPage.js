import { motion } from 'framer-motion';

const AddEventPage = () => {
  return (
    <div className="w-full grid place-items-center mt-8 text-[#e1e1e1]">
      <div className="w-[50%] bg-zinc-900 border-zinc-800">
        <form className="flex flex-col space-y-2 w-full px-4 py-6 ">
          <label>Lokacija</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <label>Opis</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <label>Adresa</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <label>Vrijeme</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <label>Datum</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <label>Tip</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <label>Slika</label>
          <input className="bg-zinc-800 rounded border border-opacity-50 border-gray-300 h-8 shadow-lg" />
          <div className="w-full flex items-center justify-center">
            <motion.button className="w-24 bg-zinc-900 shadow-md rounded-lg py-1">
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventPage;
