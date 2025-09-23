import { useState } from "react";
const NoteForm = ({notes, setNotes}) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "low",
    category: "work",
    description: "",
  });


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


  return (
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
  )
}

export default NoteForm