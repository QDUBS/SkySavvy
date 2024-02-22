import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { INote } from "../../interfaces/notes";

interface Props {
  onClose: () => void;
  onAdd: (newNote: INote) => void;
}

const AddNoteModal = ({ onClose, onAdd }: Props) => {
  const [cityNameValue, setCityNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [cityNameError, setCityNameError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityNameValue(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionValue(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValid = true;

    if (!cityNameValue.trim()) {
      setCityNameError("Please add a city");
      isValid = false;
    } else {
      setCityNameError(null);
    }

    if (!descriptionValue.trim()) {
      setDescriptionError("Please add a description");
      isValid = false;
    } else {
      setDescriptionError(null);
    }

    if (!dateValue.trim()) {
      setDateError("Please add a date");
      isValid = false;
    } else {
      setDateError(null);
    }

    if (isValid) {
      const newNote: INote = {
        id: Date.now().toString(),
        city_name: cityNameValue,
        description: descriptionValue,
        date: dateValue,
      };
      onAdd(newNote);
      onClose();
    }
  };

  return (
    <>
      <section className="w-full h-screen bg-slight-opaque flex flex-col justify-center items-center fixed top-0 left-0 z-30">
        <div className="w-3/5 bg-white px-8 py-8 rounded-md">
          <div className="flex flex-row justify-between items-center">
            <p className="text-black text-xl font-semibold">Add a note</p>
            <div
              onClick={onClose}
              className="bg-gray-400 w-6 h-6 rounded-md flex flex-col justify-center items-center cursor-pointer"
            >
              <IoClose color="#666666" size={25} />
            </div>
          </div>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="mb-10">
              <div className="flex flex-row">
                <p className="text-gray-500 text-md font-semibold">City name</p>
                <p className="text-gray-500 text-md font-semibold">*</p>
              </div>
              <input
                type="text"
                placeholder="Abu Dhabi"
                value={cityNameValue}
                onChange={handleCityNameChange}
                className="px-4 py-4 bg-[#F3F3F3] rounded-md w-full mt-3"
              />
              {cityNameError && <p className="error-text">{cityNameError}</p>}
            </div>

            <div className="mb-10">
              <div className="flex flex-row">
                <p className="text-gray-500 text-md font-semibold">
                  Description
                </p>
                <p className="text-gray-500 text-md font-semibold">*</p>
              </div>
              <input
                type="text"
                placeholder="Get to the store before it rains"
                value={descriptionValue}
                onChange={handleDescriptionChange}
                className="px-4 py-4 bg-[#F3F3F3] rounded-md w-full mt-3"
              />
              {descriptionError && (
                <p className="error-text">{descriptionError}</p>
              )}
            </div>

            <div className="mb-10">
              <div className="flex flex-row">
                <p className="text-gray-500 text-md font-semibold">Date</p>
                <p className="text-gray-500 text-md font-semibold">*</p>
              </div>
              <input
                type="date"
                placeholder="21/5/2021"
                value={dateValue}
                onChange={handleDateChange}
                className="px-4 py-4 bg-[#F3F3F3] rounded-md w-full mt-3"
              />
              {dateError && <p className="error-text">{dateError}</p>}
            </div>

            <div className="w-full flex flex-row items-center justify-between mt-5 mb-4">
              <div className="flex flex-row">
                <p className="text-gray-500 text-md font-semibold">*</p>
                <p className="text-gray-500 text-md font-semibold">
                  This field is mandatory
                </p>
              </div>

              <div className="flex flex-row">
                <button onClick={onClose} className="cancel-button">
                  Cancel
                </button>
                <button type="submit" className="finish-button ml-2">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNoteModal;
