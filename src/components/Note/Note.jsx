import { Link } from "react-router-dom";
import "./Note.scss"

const Note = ({ note }) => {
  const { body, title, id } = note;

  return (
    <div className="note">
      <h3>{id}.{title}</h3>
      <p>{body}</p>
      <Link to={`note/${id}`}>Manage note</Link>
    </div>
  );
};

export default Note;
