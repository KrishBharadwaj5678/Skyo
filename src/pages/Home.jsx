import { Toaster } from "react-hot-toast";
import SearchBar from "../components/home/top/SearchBar";
import DarkAndLight from "../components/home/top/DarkAndLight";
import CurrentWeather from "../components/home/left/CurrentWeather";
import AirConditions from "../components/home/left/AirConditions";
import AirQuality from "../components/home/right/AirQuality";

function Home() {
  return (
    <div className="px-3.5 sm:px-5 md:px-6 w-full min-h-screen bg-gray-100 dark:bg-[#0b131e] transition-colors duration-300">
      <Toaster />

      {/* Top Section */}
      <div className="w-full pt-5 md:pt-4 flex items-center gap-5 md:gap-0 justify-between">
        {/* Search Bar */}
        <SearchBar />

        {/* Dark/Light Mode */}
        <DarkAndLight />
      </div>

      {/* Weather Dashboard */}
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6 mt-0 md:mt-2">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-8/12 flex flex-col justify-between">
          <CurrentWeather />
          <AirConditions />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:flex-1 flex flex-col mb-10 md:mb-0">
          <AirQuality />
        </div>
      </div>
    </div>
  );
}

export default Home;
