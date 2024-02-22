import React from "react";
import { MdFavorite, MdOutlineFavorite } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../constants/app_routes";
import sunny from "../../assets/images/sun-behind-small-cloud.png";
import cloudy from "../../assets/images/sun-behind-large-cloud.png";
import freezing from "../../assets/images/cloud-with-snow.png";

interface Props {
  name: string;
  country: string;
  temperature: number;
  isFavorite: boolean;
  removeCity: (name: string) => void;
}

export default function City({
  name,
  country,
  temperature,
  isFavorite,
  removeCity,
}: Props) {
  const handleRemove = () => {
    removeCity(name);
  };

  const getTemperature = (temperature: number) => {
    if (temperature > 34) {
      return <img src={sunny} alt="sunny" className=" w-8 h-8" />;
    } else if (temperature < 34 && 23) {
      return <img src={cloudy} alt="cloudy" className=" w-8 h-8" />;
    } else if (temperature < 34) {
      return <img src={freezing} alt="freezing" className=" w-8 h-8" />;
    }
  };

  return (
    <Link
      to={`${AppRoutes.HostName}${AppRoutes.CityDetails}/${name}`}
      className="flex flex-row items-center px-5 py-4 mb-2 border-1 border-gray-200 rounded-sm hover:bg-gray-50 hover:cursor-pointer"
    >
      <div className="flex flex-row items-center flex-1 text-gray-600 text-lg font-normal">
        <p className="flex flex-1 text-black text-md font-normal pr-2">
          {name}, {country}{" "}
          <span className="text-gray-500 text-sm pl-4">{temperature}°F</span>{" "}
          {getTemperature(temperature)}
        </p>
      </div>
      <div className="flex flex-row items-center">
        {isFavorite ? (
          <MdFavorite color="#666" size={25} />
        ) : (
          <MdOutlineFavorite color="#666" size={25} />
        )}
        <CiCircleRemove
          color=""
          onClick={handleRemove}
          size={25}
          className="ml-4"
        />
      </div>
    </Link>
  );
}
