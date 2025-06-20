import { Note } from "@/types/note";

import NoteClient from "./Note.client";
import css from "./NoteList.module.css";

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <NoteClient item={note} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
