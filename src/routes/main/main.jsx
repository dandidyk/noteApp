import { useEffect, useState } from "react";
import Note from "../../components/Note/Note";
import NoteForm from "../../components/NoteForm/NoteForm";
import "./Main.scss";

function Root() {
  const [notes, setNotes] = useState();
  const [isLoadingNotes, setIsLoadingNotes] = useState(true);
  const [note, setNote] = useState({ body: "", title: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setNotes(json);
        setIsLoadingNotes(false);
      });
  }, []);

  const changeNoteTitle = (e) => {
    setNote({ ...note, title: e.target.value });
  };
  const changeNoteBody = (e) => {
    setNote({ ...note, body: e.target.value });
  };

  const saveNote = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        ...note,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => setNote({body: '', title: ''}))
  };

  return (
    <main className="main">
      <h1>Note App</h1>
      <h2>Fill the form to create a new note</h2>
      <NoteForm
        note={note}
        changeNoteBody={changeNoteBody}
        changeNoteTitle={changeNoteTitle}
        saveNote={saveNote}
      />
      <h2>List of your notes</h2>
      {isLoadingNotes ? (
        <p>Notes are loading</p>
      ) : notes && notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Note note={note} />
            </li>
          ))}
        </ul>
      ) : (
        <p>We have some problems with loading notes. Try to reload the page.</p>
      )}
    </main>
  );
}

export default Root;
