import React from 'react'

const Note = ({ note, removeNote }) => {
  return (
    <div key={note.id} className="relative mb-3 p-4 border-1 border-gray-400 rounded-lg shadow-lg">

      <p><span className="font-semibold text-blue-400">Title: </span> {note.title}</p>
      <p><span className="font-semibold text-blue-400">Priority: </span> {note.priority}</p>
      <p><span className="font-semibold text-blue-400">Category: </span> {note.category}</p>
      <p><span className="font-semibold text-blue-400">Description: </span> {note.description}</p>

      <span onClick={() => removeNote(note.id)} className="absolute font-bold top-2 right-2 text-red-500 text-2xl cursor-pointer hover:text-red-700 transition-all duration-300">X</span>
    </div>
  )
}

export default Note