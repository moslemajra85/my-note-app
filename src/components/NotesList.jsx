import Note from "./Note"
const NotesList = ({ notes, removeNote }) => {
    return (
        <>


            {notes.length === 0 ? (
                <p className="text-blue-400 text-center p-4 text-2xl font-bold">No Note Yet</p>
            ) : (

                notes.map((note) => (<Note note={note} removeNote={removeNote} />))
            )}

        </>
    )
}

export default NotesList