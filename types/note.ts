export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export type NotesHttpResponse = {
  notes: Note[];
  totalPages: number;
};
