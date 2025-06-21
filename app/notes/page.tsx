import NotesClient from "./Notes.client";

import css from "./NotesPage.module.css";

import { fetchNotes } from "../../lib/api";

const Notes = async () => {
  const response = await fetchNotes("", 1);

  return (
    <section className={css.app}>
      {response && <NotesClient initialValue={response} />}
    </section>
  );
};

export default Notes;
