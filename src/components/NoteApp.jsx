import { useState } from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";


const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (note) => {

    setNotes([...notes, note])


  }
  const removeNote = (id) => {

    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl text-center text-blue-400 font-bold">
        📓 Note App
      </h1>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} removeNote={removeNote} />

    </div>
  );
};

export default NoteApp;
