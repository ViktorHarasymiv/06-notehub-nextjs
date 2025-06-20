import NotesClient from "./Notes.client";

import css from "./NotesPage.module.css";

const Notes = () => {
  return (
    <section className={css.app}>
      <NotesClient />
    </section>
  );
};

export default Notes;
