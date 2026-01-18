import { weatherIcon } from "../../../constants/weatherIcon";
import { useWeather } from "../../../context/WeatherContext";
import NotAvailableSVG from "/NotAvailable.svg";

const CurrentWeather = () => {
  let { weatherData } = useWeather();

  return (
    <div className="backdrop-blur rounded-2xl lg:mt-14 mt-8 px-4 sm:px-7 md:px-9 my-9 pt-0 dark:text-white transition-colors duration-300">
      <div className="flex flex-row justify-between items-center ">
        {/* LEFT */}
        <div className="text-left flex-1">
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300 leading-tight">
            {weatherData ? weatherData.name : "--"}
          </h2>

          <p className="text-md sm:text-xl mt-0 sm:mt-2 capitalize text-slate-500 transition-colors duration-300 dark:text-slate-400">
            {weatherData ? weatherData.weather[0].description : "--"}
          </p>

          <div className="font-bold mt-3 sm:mt-6 flex justify-start items-start">
            <span className="text-5xl sm:text-7xl text-gray-800 dark:text-gray-100 transition-colors duration-300">
              {weatherData ? Math.floor(weatherData.main.temp - 273.15) : "--"}
            </span>
            <span className="text-3xl sm:text-5xl ml-1 mt-0.5 sm:mt-1 text-gray-800 dark:text-gray-100 transition-colors duration-300">
              °C
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <img
          src={
            weatherData
              ? weatherIcon.find(
                  (icon) => icon.name === weatherData.weather[0].icon,
                )?.src
              : NotAvailableSVG
          }
          className="w-32 h-32 sm:w-66 sm:h-66 lg:w-64 lg:h-64"
          alt="Weather"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
