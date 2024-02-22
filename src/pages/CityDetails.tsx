import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useCallback, useEffect, useState } from "react";
import { ICity } from "../interfaces/cities";
import AddNoteModal from "../modals/notes/AddNoteModal";
import axios from "axios";
import { MdAddCircle } from "react-icons/md";
import background from "../assets/images/background-image.jpg";
import sunny from "../assets/images/sun-behind-small-cloud.png";
import cloudy from "../assets/images/sun-behind-large-cloud.png";
import freezing from "../assets/images/cloud-with-snow.png";
import moment from "moment";
import WeatherHighlight from "../components/cities/WeatherHighlight";
import { INote } from "../interfaces/notes";

export default function CityDetails() {
  const params = useParams<{ city: string }>();
  const [city, setCity] = useState<ICity | any>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const searchCity = () => {};

  const addNoteToLocalStorage = useCallback((newNote: INote) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = [...savedNotes, newNote];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_KEY}&query=${city}`
      );
      const weatherData = response.data;
      console.log(weatherData);

      setCity(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getTemperature = (temperature: number) => {
    if (temperature >= 21 && temperature <= 32) {
      return <img src={sunny} alt="sunny" className=" w-12 h-12" />;
    } else if (temperature < 21 && temperature >= 6) {
      return <img src={cloudy} alt="cloudy" className=" w-12 h-12" />;
    } else if (temperature < 6) {
      return <img src={freezing} alt="freezing" className=" w-12 h-12" />;
    }
  };

  const getHumidity = (humidity: number) => {
    if (humidity < 30) {
      return "Low";
    } else if (humidity >= 34 && humidity <= 60) {
      return "Moderate";
    } else if (humidity > 60) {
      return "High";
    }
  };

  const getVisibility = (visibility: number) => {
    if (visibility < 3) {
      return "Low";
    } else if (visibility >= 3 && visibility <= 9) {
      return "Medium";
    } else if (visibility > 10) {
      return "High";
    }
  };

  const getPressure = (pressure: number) => {
    if (pressure < 29.92) {
      return "Low";
    } else if (pressure >= 29.53 && pressure <= 29.92) {
      return "Moderate";
    } else if (pressure > 29.92) {
      return "High";
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <Layout onSearch={searchCity}>
      <div>
        <div className="px-4 py-6">
          {/* Header  */}
          <div className="w-full h-52 relative rounded-sm">
            <img
              src={background}
              alt="freezing"
              className=" w-full h-52 relative bg-cover rounded-sm"
            />
            <div className="bg-overlay w-full h-52 absolute top-0 left-0 pt-10 px-5 flex flex-row justify-between rounded-sm">
              <div>
                {getTemperature(10)}
                <p className="text-white text-7xl font-normal">
                  {city?.current?.temperature}°C
                </p>
                <div className="flex flex-row items-center pl-2">
                  <p className="text-white text-lg font-normal">
                    {city?.location?.name},
                  </p>
                  <p className="text-white text-lg font-normal">
                    {city?.location?.country}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-end pb-5">
                <p className="text-white text-md font-medium">
                  {moment(new Date(), "MMM DD, YYYY, h:mm:ss A").format("LT")}
                </p>
                <p className="text-white text-md font-normal">
                  {moment(new Date(), "MMM DD, YYYY, h:mm:ss A").format(
                    "MMM DD, YYYY"
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="w-full h-16 flex flex-row justify-end bg-gray-100 px-4 py-5">
            <button
              onClick={() => setShowModal(true)}
              className="flex flex-row items-center"
            >
              <MdAddCircle color="#333" size={25} />
              <p className="text-gray-600 font-medium text-lg ml-2">
                Add a note
              </p>
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-10">
            <p className="text-black text-md font-medium mb-4">
              Today's Highlights
            </p>
            <div className="flex flex-row flex-wrap justify-between">
              <WeatherHighlight title="UV Index">
                <div>
                  <p className="text-black text-7xl font-medium">
                    {city?.current?.uv_index}
                  </p>
                </div>
              </WeatherHighlight>

              <WeatherHighlight title="Humidity">
                <div>
                  <p className="text-black text-2xl font-medium">
                    {city?.current?.humidity}%
                  </p>
                  <p className="text-black text-sm font-medium mt-4">
                    {getHumidity(city?.current?.humidity)}
                  </p>
                </div>
              </WeatherHighlight>

              <WeatherHighlight title="Visibility">
                <div>
                  <p className="text-black text-2xl font-medium">
                    {city?.current?.humidity}km
                  </p>
                  <p className="text-black text-sm font-medium mt-4">
                    {getVisibility(city?.current?.humidity)}
                  </p>
                </div>
              </WeatherHighlight>

              <WeatherHighlight title="Pressure">
                <div>
                  <p className="text-black text-2xl font-medium">
                    {city?.current?.humidity}
                  </p>
                  <p className="text-black text-sm font-medium mt-4">
                    {getPressure(city?.current?.pressure)}
                  </p>
                </div>
              </WeatherHighlight>

              <WeatherHighlight title="Region">
                <div>
                  <p className="text-black text-sm font-normal mt-7">
                    {city?.location?.region}
                  </p>
                </div>
              </WeatherHighlight>
            </div>
          </div>
        </div>

        {showModal && (
          <AddNoteModal
            onAdd={addNoteToLocalStorage}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </Layout>
  );
}
