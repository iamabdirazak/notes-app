"use client";

import { useRouter, useParams } from "next/navigation";
import { useNotes } from "@/hooks/useNotes";
import { NoteForm } from "@/components/NoteForm";

export default function EditPage() {
  const { id } = useParams();
  const { getNote, updateNote, deleteNote } = useNotes();
  const router = useRouter();

  const note = getNote(id as string);
  
  if (!note) return <p className="p-10">Note not found.</p>;

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Note</h1>

      <NoteForm
        initialTitle={note.title}
        initialContent={note.content}
        buttonLabel="Update"
        onSubmit={async (title, content) => {
          updateNote(note.id, title, content);
          router.push('/notes');
        }}
      />

      <button
        className="mt-4 text-red-600 hover:underline"
        onClick={() => {
          deleteNote(note.id);
          router.push('/notes');
        }}
      >
        Delete Note
      </button>
    </div>
  );
}