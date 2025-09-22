import { useState } from "react";

const NoteApp = () => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "low",
    category: "work",
    description: "",
  });



  const [notes, setNotes] = useState([]);

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {

      id: Date.now(),
      ...formData
    }

    setNotes([...notes, newNote])

    // clear the title and the description

    setFormData({

      ...formData,
      title: "",
      description: ""
    })


  };



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
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-gray-600 font-semibold" htmlFor="title">
            Title:
          </label>
          <input
            onChange={handleFormData}
            className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
            type="text"
            name="title"
            id="title"
            value={formData.title}
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-600 font-semibold"
            htmlFor="priority"
          >
            Priority:
          </label>
          <select
            onChange={handleFormData}
            className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
            name="priority"
            id="priority"
            value={formData.priority}
          >
            <option value="high">🍎 High</option>
            <option value="medium">🍏 Medium</option>
            <option value="low">🌶 Low</option>
          </select>
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-600 font-semibold"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            onChange={handleFormData}
            className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
            name="category"
            id="category"
            value={formData.category}
          >
            <option value="work">💰 Work</option>
            <option value="personal">🙋 Personal</option>
            <option value="ideas">💡Ideas</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 font-semibold" htmlFor="title">
            Description:
          </label>
          <textarea
            onChange={handleFormData}
            className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
            type="text"
            name="description"
            id="description"
            value={formData.description}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-2xl text-white p-4 rounded-lg border-0 shadow-lg w-full cursor-pointer hover:bg-blue-700 transition-all duration-500"
        >
          Save Note
        </button>
      </form>

      {/* Where we will show our notes */}

      {notes.length === 0 ? (
        <p className="text-blue-400 text-center p-4 text-2xl font-bold">No Note Yet</p>
      ) : (

        notes.map((note) => (<div className="relative mb-3 p-4 border-1 border-gray-400 rounded-lg shadow-lg">

          <p><span className="font-semibold text-blue-400">Title: </span> {note.title}</p>
          <p><span className="font-semibold text-blue-400">Priority: </span> {note.priority}</p>
          <p><span className="font-semibold text-blue-400">Category: </span> {note.category}</p>
          <p><span className="font-semibold text-blue-400">Description: </span> {note.description}</p>

          <span onClick={() => removeNote(note.id)} className="absolute font-bold top-2 right-2 text-red-500 text-2xl cursor-pointer hover:text-red-700 transition-all duration-300">X</span>
        </div>))
      )}
    </div>
  );
};

export default NoteApp;
