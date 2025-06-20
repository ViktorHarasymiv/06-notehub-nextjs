import css from "./NotesPage.module.css";

import NoteList from "@/components/NoteList/NoteList";

import { fetchNotes } from "@/lib/api";

const Notes = async () => {
  const data = await fetchNotes();

  return (
    <section className={css.app}>
      <h1 className={css.toolbar}>Notes List</h1>
      {data && <NoteList notes={data.notes} />}
    </section>
  );
};

export default Notes;
