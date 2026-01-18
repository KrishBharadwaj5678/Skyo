import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { WeatherContextProvider } from "./context/WeatherContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <WeatherContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </WeatherContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

export default App;
