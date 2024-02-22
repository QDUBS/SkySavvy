import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import locationImage from "../../assets/images/map.png";
import axios from "axios";
import { AppRoutes } from "../../constants/app_routes";

interface Props {
  onClose: () => void;
}

const LocationPermissionModal = ({ onClose }: Props) => {
  const [ipAddress, setIpAdress] = useState<string>("");

  const enableLocation = async () => {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.data;

      <Navigate
        to={`${AppRoutes.HostName}${AppRoutes.CityDetails}/${data.city}`}
        replace
      />;
    } catch (error) {}
  };

  const getVisitorIP = async () => {
    try {
      const response = await axios.get("https://api.ipify.org");
      const data = await response.data.text();

      setIpAdress(data);
    } catch (error) {
      console.error("Failed to fetch IP");
    }
  };

  useEffect(() => {
    getVisitorIP();
  }, []);

  return (
    <>
      <section className="w-full h-screen bg-slight-opaque flex flex-col justify-center items-center fixed top-0 left-0 z-30">
        <div className="w-2/5 bg-white px-0 pt-8 pb-4 rounded-md">
          <div className="flex flex-col justify-between items-center relative">
            <p className=" text-gray-600 text-xl font-normal text-center">
              Let SkySavvy access your location to provide forecasts and updates
            </p>
            <img
              src={locationImage}
              alt="Location Image"
              className=" w-40 h-40 mt-1 mb-28"
            />
            <div className="absolute bottom-0 w-full px-4">
              <button
                onClick={enableLocation}
                className="enable-button w-full px-6 py-5 text-sm"
              >
                ENABLE LOCATION
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-3 text-gray-500 text-sm"
              >
                NOT NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationPermissionModal;
