import React, { useEffect, useState } from "react";
import { INote } from "../interfaces/notes";
import Note from "../components/notes/Note";
import Layout from "../layouts/Layout";

const notes = [];

export default function Notes() {
  const [notes, setNotes] = useState<INote[]>();

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(savedNotes);
  }, []);

  const searchCity = () => {};

  const saveNotesToLocalStorage = (updatedNotes: INote[]) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const addNote = (newNote: INote) => {
    const updatedNotes = [...notes!, newNote];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const editNote = (editedNote: INote) => {
    const updatedNotes = notes!.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes!.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <Layout onSearch={searchCity}>
      <div>
        {notes?.map((note) => (
          <Note
            key={note.id}
            note={note}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </Layout>
  );
}
