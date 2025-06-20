"use client";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";

import css from "./NotesPage.module.css";

import { fetchNotes } from "@/lib/api";
import Pagination from "@/components/Pagination/Pagination";
import NoteModal from "@/components/NoteModal/NoteModal";

const NotesClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Queries
  const [debouncedQuery] = useDebounce(query, 400);

  const { data, isSuccess } = useQuery({
    queryKey: ["notes", debouncedQuery, page],
    queryFn: () => fetchNotes(debouncedQuery, page),
    placeholderData: keepPreviousData,
  });

  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1);
  };

  return (
    <>
      <div className={css.toolbar}>
        <SearchBox query={query} updateQuery={updateQuery} />
        {data?.totalPages && data.totalPages > 1 ? (
          <Pagination
            totalPages={data?.totalPages}
            page={page}
            onPageChange={setPage}
          />
        ) : (
          ""
        )}
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
        {isModalOpen && <NoteModal onClose={closeModal} />}
      </div>
      {data && isSuccess && <NoteList notes={data.notes} />}
    </>
  );
};

export default NotesClient;
