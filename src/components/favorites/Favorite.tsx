import { MdOutlineFavorite } from "react-icons/md";

interface Props {
  id: string;
  city_name: string;
  country: string;
  onDelete: () => void;
}

export default function Favorite({ id, city_name, country, onDelete }: Props) {
  const deleteFavorite = () => {};

  return (
    <div>
      <div className="flex flex-1">
        <div className="flex flex-row justify-between items-center">
          <p className="text-black font-normal">{city_name}</p>
          <p className="text-gray-600 font-normal">{country}</p>
        </div>

        <div className="flex flex-row items-center">
          <MdOutlineFavorite color="" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}
