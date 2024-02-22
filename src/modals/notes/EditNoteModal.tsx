import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { INote } from "../../interfaces/notes";

interface Props {
  note: INote;
  onClose: () => void;
  onEdit: (editedNote: INote) => void;
  onDelete: (id: string) => void;
}

const EditNoteModal = ({ note, onClose, onEdit, onDelete }: Props) => {
  const [editedNote, setEditedNote] = useState<INote>(note);
  const [disabled, setDisabled] = useState(true);

  const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedNote({
      ...editedNote,
      city_name: event.target.value,
    });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedNote({
      ...editedNote,
      description: event.target.value,
    });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedNote({
      ...editedNote,
      date: event.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit(editedNote);
    onClose();
  };

  const handleDelete = () => {
    onDelete(note.id);
    onClose();
  };

  return (
    <>
      <section className="w-full h-screen bg-slight-opaque flex flex-col justify-center items-center fixed top-0 left-0 z-30">
        <div className="w-3/5 bg-white px-8 py-8 rounded-md">
          <div className="flex flex-row justify-between items-center">
            <p className="text-black text-xl font-semibold">
              Edit note{" "}
              <FaRegEdit color="#666" onClick={() => setDisabled(!disabled)} />
            </p>
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
                value={editedNote.city_name}
                onChange={handleCityNameChange}
                className="px-4 py-4 bg-[#F3F3F3] rounded-md w-full mt-3"
                disabled
              />
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
                value={editedNote.description}
                onChange={handleDescriptionChange}
                className="px-4 py-4 bg-[#F3F3F3] rounded-md w-full mt-3"
                disabled={disabled}
              />
            </div>

            <div className="mb-10">
              <div className="flex flex-row">
                <p className="text-gray-500 text-md font-semibold">Date</p>
                <p className="text-gray-500 text-md font-semibold">*</p>
              </div>
              <input
                type="date"
                placeholder="21/5/2021"
                value={editedNote.date}
                onChange={handleDateChange}
                className="px-4 py-4 bg-[#F3F3F3] rounded-md w-full mt-3"
              />
            </div>

            <div className="w-full flex flex-row items-center justify-between mt-5 mb-4">
              <div className="flex flex-row">
                <p className="text-gray-500 text-md font-semibold">*</p>
                <p className="text-gray-500 text-md font-semibold">
                  This field is mandatory
                </p>
              </div>

              <div className="flex flex-row">
                <button onClick={handleDelete} className="cancel-button">
                  Delete
                </button>
                <button
                  type="submit"
                  className="finish-button ml-2"
                  disabled={disabled}
                >
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

export default EditNoteModal;
