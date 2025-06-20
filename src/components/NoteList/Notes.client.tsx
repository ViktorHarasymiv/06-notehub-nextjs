"use client";

import css from "./NoteList.module.css";
import Link from "next/link";

import { Note } from "@/types/note";

import { deleteNote } from "@/lib/api";

type Props = {
  item: Note;
};

const NotesClient = ({ item }: Props) => {
  const handleDelete = (id: number) => {
    deleteNote(id);
  };
  return (
    <>
      <Link href={`/notes/${item.id}`} className={css.link}>
        View details
      </Link>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </>
  );
};

export default NotesClient;
