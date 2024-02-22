import { useEffect, useState } from "react";
import Cities from "../components/cities/Cities";
import { ICity } from "../interfaces/cities";
import Layout from "../layouts/Layout";
import { IFavorite } from "../interfaces/favorites";
import LocationPermissionModal from "../modals/common/LocationPermission";
import axios from "axios";
import {
  IWeatherData,
  IWeatherDataCurrent,
  IWeatherDataLocation,
  IWeatherDataRequest,
} from "../interfaces/weather";
import { populatedCities } from "../db/cities";
import { allCities } from "../db/temperatures";

export default function Home() {
  const [cities, setCities] = useState<IWeatherData[]>([]);
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const [showPermissions, setShowPermissions] = useState<boolean>(false);

  const searchCity = async (query: string) => {
    console.log("Search query:", query);
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_KEY}&query=${query}`
      );
      const weatherData = response.data;
      const newCity: IWeatherData = {
        name: weatherData.location.name,
        country: weatherData.location.country,
        temperature: weatherData.current.temperature,
      };

      setCities([newCity]);
      console.log(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const removeCity = (name: string) => {
    const updatedCities = cities!.filter((city) => city.name !== name);
    setCities(updatedCities);

    const updatedFavorites = favorites.filter((city) => city.name !== name);
    setFavorites(updatedFavorites);

    localStorage.setItem("cities", JSON.stringify(updatedCities));
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const fetchWeatherData = async () => {
    try {
      const all_cities: IWeatherData[] = await Promise.all(
        populatedCities.map(async (cityName) => {
          const response = await axios.get(
            `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_KEY}&query=${cityName}`
          );
          const weatherData = response.data;
          console.log(weatherData);

          return {
            name: cityName,
            country: weatherData.location.country,
            temperature: weatherData.current.temperature,
          };
        })
      );

      setCities(all_cities);
      localStorage.setItem("cities", JSON.stringify(all_cities));
      console.log("All cities: ", all_cities);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const firstTimeUser = localStorage.getItem("firstLogin");
    if (firstTimeUser) {
      fetchWeatherData();
      setShowPermissions(true);
    } else {
      const storedCities = localStorage.getItem("cities");
      if (storedCities) {
        setCities(JSON.parse(storedCities));
      }
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }
  }, []);

  return (
    <Layout onSearch={searchCity}>
      <div>
        <Cities
          cities={allCities!}
          favorites={favorites}
          removeCity={removeCity}
        />

        {showPermissions && (
          <LocationPermissionModal onClose={() => setShowPermissions(false)} />
        )}
      </div>
    </Layout>
  );
}
