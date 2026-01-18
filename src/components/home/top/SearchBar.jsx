import { FaSearch } from "react-icons/fa";
import { useWeather } from "../../../context/WeatherContext";

const SearchBar = () => {
  let { setCity, fetchWeather } = useWeather();

  return (
    <div className="w-full md:w-8/12 rounded-lg text-black dark:bg-[#202b3b] dark:text-white bg-white transition-colors duration-300 shadow-xs">
      <div className="w-full flex items-center">
        <FaSearch className="ml-4 text-2xl md:text-lg text-black/80 dark:text-white transition-colors duration-300" />
        <input
          type="text"
          className="px-3 py-3 border-none rounded-lg outline-none w-full text-black bg-transparent dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
          placeholder="Search for cities"
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="duration-300 relative group cursor-pointer text-sky-50  overflow-hidden w-30 rounded-r-md bg-sky-200 p-3 flex justify-center items-center font-medium"
          onClick={() => {
            fetchWeather();
          }}
        >
          <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
          <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
          <p className="z-10 text-md">Search</p>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
