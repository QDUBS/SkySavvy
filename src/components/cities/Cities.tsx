import { ICity } from "../../interfaces/cities";
import { IFavorite } from "../../interfaces/favorites";
import City from "./City";

interface Props {
  cities: ICity[];
  favorites: IFavorite[];
  removeCity: (name: string) => void;
}

export default function Cities({ cities, favorites, removeCity }: Props) {
  const sortedCities = [
    ...favorites.map((favorite) => favorite.name),
    ...cities
      .map((city) => city.name)
      .filter(
        (city) => !favorites.map((favorite) => favorite.name).includes(city)
      ),
  ];

  return (
    <div className="px-4 pt-10 pb-10">
      {sortedCities.map((cityName, index) => {
        const city = cities.find((city) => city.name === cityName);
        if (!city) return null;

        const isFavorite = favorites.some(
          (favorite) => favorite.name === cityName
        );

        return (
          <City
            key={index}
            name={city.name}
            country={city.country}
            temperature={27}
            isFavorite={isFavorite}
            removeCity={removeCity}
          />
        );
      })}
    </div>
  );
}
