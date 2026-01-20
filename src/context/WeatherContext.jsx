import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

let WeatherContext = createContext(null);

export let WeatherContextProvider = ({ children }) => {
  let [coordinates, setCoordinates] = useState({
    lat: null,
    long: null,
  });
  let baseURL = import.meta.env.VITE_BASE_URL;
  let [weatherData, setWeatherData] = useState();
  let [airQuality, setAirQuality] = useState();
  let [city, setCity] = useState(null); // Holds city name
  let appID = import.meta.env.VITE_APP_ID; // Your OpenWeather App ID

  // Fetch Weather Data based on Search
  let fetchWeather = async () => {
    if (city?.length > 1) {
      try {
        let response = await axios.get(
          `${baseURL}/weather?q=${city}&appid=${appID}`,
        );

        setWeatherData(response.data);
        fetchAirQuality(response?.data?.coord?.lat, response?.data?.coord?.lon);
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong!");
        setWeatherData(null);
        setAirQuality(null);
      }
    }
  };

  // Fetch Weather Details On Reload
  useEffect(() => {
    if (!coordinates.lat || !coordinates.long) return;

    let fetchWetherAndAQI = async () => {
      try {
        let WeatherResp = await axios.get(
          `${baseURL}/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${appID}`,
        );

        setWeatherData(WeatherResp?.data);

        let AirQualityResp = await axios.get(
          `${baseURL}/air_pollution?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${appID}`,
        );

        setAirQuality(AirQualityResp?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWetherAndAQI();
  }, [coordinates]);

  // Fetch Air Quality based on Search
  let fetchAirQuality = async (lat, lon) => {
    try {
      let response = await axios.get(
        `${baseURL}/air_pollution?lat=${lat}&lon=${lon}&appid=${appID}`,
      );
      setAirQuality(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Current Geoposition
  useEffect(() => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      setCoordinates({ lat: 28.6667, long: 77.2167 });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (location) => {
        setCoordinates({
          lat: location.coords.latitude,
          long: location.coords.longitude,
        });
      },
      (error) => {
        console.log("Geolocation error:", error);
        // Set default location on any error
        setCoordinates({ lat: 28.6667, long: 77.2167 }); // Delhi
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        coordinates,
        setCoordinates,
        baseURL,
        weatherData,
        setWeatherData,
        airQuality,
        setAirQuality,
        city,
        setCity,
        appID,
        fetchWeather,
        fetchAirQuality,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export let useWeather = () => {
  return useContext(WeatherContext);
};
