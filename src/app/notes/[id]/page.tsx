import { fetchNoteById } from "@/lib/api";

import css from "./NoteDetails.module.css";
import style from "../../../components/NoteList/NoteList.module.css";

type Props = {
  params: Promise<{ id: number }>;
};

const NoteDetailsClient = async ({ params }: Props) => {
  const noteData = await params;

  const note = await fetchNoteById(noteData.id);

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <button className={style.link}>Edit note</button>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>Created date</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;
