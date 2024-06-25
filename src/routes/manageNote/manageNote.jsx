import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NoteForm from "../../components/NoteForm/NoteForm";
import "./ManageNote.scss"

export default function ManageNote() {
  const [note, setNote] = useState();
  const [isLoadingNote, setIsLoadingNote] = useState(true);
  let { nodeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${nodeId}`)
      .then((response) => response.json())
      .then((json) => {
        setNote(json);
        setIsLoadingNote(false);
      });
  }, []);

  const saveNote = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        ...note,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const deleteNote = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${nodeId}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  const changeNoteTitle = (e) => {
    setNote({ ...note, title: e.target.value });
  };
  const changeNoteBody = (e) => {
    setNote({ ...note, body: e.target.value });
  };

  return (
    <div className="manage-note">
      <Link to={`/`}>Return to the notes list</Link>
      <h1>Here you can manage the note</h1>
      <NoteForm
        note={note}
        changeNoteBody={changeNoteBody}
        changeNoteTitle={changeNoteTitle}
        saveNote={saveNote}
      />
      <button onClick={deleteNote}>Delete the note</button>
    </div>
  );
}
