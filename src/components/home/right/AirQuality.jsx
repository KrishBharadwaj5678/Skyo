import {
  FaSmog,
  FaCloud,
  FaBurn,
  FaIndustry,
  FaLeaf,
  FaFireAlt,
  FaSkullCrossbones,
  FaRadiation,
} from "react-icons/fa";
import { useWeather } from "../../../context/WeatherContext";

const AirQuality = () => {
  let { airQuality } = useWeather();

  return (
    <div
      className="
      p-6 flex-1 rounded-md md:rounded-2xl mt-4
      bg-[#f8fafc] dark:bg-[#202b3b]
      text-black dark:text-white
      transition-colors duration-300
      shadow-xs"
    >
      <h3 className="text-md font-semibold transition-colors duration-300 dark:text-white mb-4">
        AIR QUALITY
      </h3>

      {/* Pollutants */}
      <div className="flex flex-col gap-3">
        {[
          {
            label: "PM2.5",
            icon: <FaSmog className="text-orange-500" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.pm2_5)} µg/m³`
              : "--",
          },
          {
            label: "PM10",
            icon: <FaCloud className="text-yellow-500" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.pm10)} µg/m³`
              : "--",
          },
          {
            label: "NO₂",
            icon: <FaIndustry className="text-red-500" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.no2)} µg/m³`
              : "--",
          },
          {
            label: "CO",
            icon: <FaBurn className="text-rose-500" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.co)} µg/m³`
              : "--",
          },
          {
            label: "NO",
            icon: <FaSkullCrossbones className="text-pink-500" />,
            value: airQuality
              ? `${airQuality.list[0].components.no} µg/m³`
              : "--",
          },
          {
            label: "NH₃",
            icon: <FaLeaf className="text-green-500" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.nh3)} µg/m³`
              : "--",
          },
          {
            label: "SO₂",
            icon: <FaFireAlt className="text-purple-500" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.so2)} µg/m³`
              : "--",
          },
          {
            label: "O₃",
            icon: <FaRadiation className="text-red-600" />,
            value: airQuality
              ? `${Math.round(airQuality.list[0].components.o3)} µg/m³`
              : "--",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="
                    flex items-center justify-between
                    px-6 py-4.5 rounded-sm
                    bg-white/60 dark:bg-white/5
                    hover:bg-[#e7edf3] dark:hover:bg-[#2b3a52]
                    transition-all duration-200 cursor-pointer
                  "
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>

            <span className="text-md font-semibold text-green-500">
              {item.level}
            </span>

            <span className="text-md text-slate-500 dark:text-slate-300">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQuality;
