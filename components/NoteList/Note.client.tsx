"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./NoteList.module.css";
import Link from "next/link";

import { Note } from "../../types/note";

import { deleteNote } from "../../lib/api";

type Props = {
  item: Note;
};

const NotesClient = ({ item }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
  return (
    <>
      <Link href={`/notes/${item.id}`} className={css.link}>
        View details
      </Link>
      <button onClick={() => mutation.mutate(item.id)} className={css.button}>
        Delete
      </button>
    </>
  );
};

export default NotesClient;
