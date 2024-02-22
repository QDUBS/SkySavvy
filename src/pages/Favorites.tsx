import { useEffect, useState } from "react";
import Favorite from "../components/favorites/Favorite";
import { IFavorite } from "../interfaces/favorites";
import Layout from "../layouts/Layout";

export default function Favorites() {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const searchCity = () => {};

  const deleteFavorite = (id: string) => {
    const updatedFavorites = favorites!.filter((favorite) => favorite.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <Layout onSearch={searchCity}>
      <div>
        {favorites!.map((favorite) => (
          <Favorite
            key={favorite.id}
            id={favorite.id}
            city_name={favorite.name}
            country={favorite.country}
            onDelete={() => deleteFavorite(favorite.id)}
          />
        ))}
      </div>
    </Layout>
  );
}
