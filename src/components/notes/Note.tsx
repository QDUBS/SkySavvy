import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import EditNoteModal from "../../modals/notes/EditNoteModal";
import { INote } from "../../interfaces/notes";

interface Props {
  note: INote;
  onEdit: (editedNote: INote) => void;
  onDelete: (id: string) => void;
}

export default function Note({ note, onEdit, onDelete }: Props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex flex-1">
        <div className="flex flex-row justify-between items-center">
          <p className="text-black font-medium">{note.city_name}</p>
          <p className="text-gray-600 font-normal">{note.description}</p>
          <p className="text-gray-700 font-normal">{note.date}</p>
        </div>

        <div className="flex flex-row items-center">
          <FaArrowRight color="#333" onClick={openModal} />
        </div>
      </div>

      {showModal && (
        <EditNoteModal
          note={note}
          onClose={() => setShowModal(false)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}
