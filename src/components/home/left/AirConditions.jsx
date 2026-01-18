import { FaWind, FaTint, FaEye, FaTemperatureLow } from "react-icons/fa";
import { Mountain, Sunrise, Sunset, WindArrowDown } from "lucide-react";
import { useWeather } from "../../../context/WeatherContext";
import AirConditionsInfo from "./AirConditionsInfo";

const AirConditions = () => {
  let { weatherData } = useWeather();

  let formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-[#202b3b] rounded-md md:rounded-2xl p-6 dark:text-white transition-colors duration-300 shadow-xs ">
      <h3 className="text-md mb-5 font-semibold uppercase">Air Conditions</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-9 gap-x-4 px-2 sm:px-4">
        <AirConditionsInfo
          icon={<FaTemperatureLow />}
          label="Feels Like"
          value={`${Math.round(weatherData?.main?.feels_like - 273.15)}°`}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<FaWind />}
          label="Wind"
          value={`${(weatherData?.wind?.speed * 3.6).toFixed(1)} km/h`}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<FaEye />}
          label="Visibility"
          value={`${weatherData?.visibility / 1000} km`}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<Sunrise />}
          label="Sunrise"
          value={formatTime(weatherData?.sys?.sunrise)}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<FaTint />}
          label="Humidity"
          value={`${weatherData?.main?.humidity} %`}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<WindArrowDown />}
          label="Pressure"
          value={`${weatherData?.main?.pressure} mb`}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<Mountain />}
          label="Ground Level"
          value={`${weatherData?.main?.grnd_level} mb`}
          visible={weatherData && true}
        />

        <AirConditionsInfo
          icon={<Sunset />}
          label="Sunset"
          value={formatTime(weatherData?.sys?.sunset)}
          visible={weatherData && true}
        />
      </div>
    </div>
  );
};

export default AirConditions;
