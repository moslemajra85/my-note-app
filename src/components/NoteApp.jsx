import { useState } from "react";

const NoteApp = () => {



    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('low')
    const [category, setCategory] = useState('work')
    const [description, setDescription] = useState('')



    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }



    return (
        <div>
            <h1 className="text-3xl text-center text-blue-400 font-bold">📓 Note App</h1>
            <form>
                <div className="mb-3">
                    <label className="block text-gray-600 font-semibold" htmlFor="title">
                        Title:
                    </label>
                    <input

                        onChange={handleTitleChange}
                        className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
                        type="text"
                        name="title"
                        id="title"
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

                        onChange={handlePriorityChange}
                        className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
                        name="priority"
                        id="priority"
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
                        onChange={handleCategoryChange}
                        className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
                        name="category"
                        id="category"
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
                        onChange={handleDescriptionChange}
                        className="border-2 border-blue-400 outline-0 p-3 rounded-md w-full"
                        type="text"
                        name="description"
                        id="description"

                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-400 text-2xl text-white p-4 rounded-lg border-0 shadow-lg w-full cursor-pointer hover:bg-blue-700 transition-all duration-500"
                >
                    Save Note
                </button>
            </form>
        </div>
    );
};

export default NoteApp;
