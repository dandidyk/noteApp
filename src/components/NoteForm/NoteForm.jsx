import "./NoteForm.scss";

export default function NoteForm({
  note,
  changeNoteTitle,
  changeNoteBody,
  saveNote,
}) {
  return (
    <>
      <form className="note-form" onSubmit={saveNote}>
        <label>
          Title
          <textarea
            name="title"
            rows="3"
            value={note?.title || ""}
            onChange={changeNoteTitle}
          />
        </label>
        <label>
          Body
          <textarea
            rows="6"
            value={note?.body || ""}
            onChange={changeNoteBody}
          />
        </label>
        <button type="submit">Save your changes</button>
      </form>
    </>
  );
}
