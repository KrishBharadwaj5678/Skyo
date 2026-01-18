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

  // Get Current Geopositon
  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     toast.error("Geolocation is not supported by your browser");
  //     return;
  //   }
  //   navigator.geolocation.getCurrentPosition((location) => {
  //     setCoordinates({
  //       lat: location.coords.latitude,
  //       long: location.coords.longitude,
  //     });
  //   });
  // }, []);

  // Get Current Geoposition
  useEffect(() => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
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

        // Handle different error cases
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error(
              "Location permission denied. Please enable location access or search for a city.",
            );
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error(
              "Location information unavailable. Please search for a city.",
            );
            break;
          case error.TIMEOUT:
            toast.error(
              "Location request timed out. Please search for a city.",
            );
            break;
          default:
            toast.error("Unable to get location. Please search for a city.");
        }

        // Optionally set a default location (e.g., a major city)
        // setCoordinates({ lat: 28.6139, long: 77.2090 }); // Delhi as example
      },
      {
        enableHighAccuracy: true,
        timeout: 10000, // 10 seconds timeout
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
