"use client";

import { NoteForm } from "@/components/NoteForm";
import { useNotes } from "@/hooks/useNotes";
import {useRouter} from "next/navigation";

export default function NewNotePage() {
  const { createNote } = useNotes();
  const router = useRouter();

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">New Note</h1>

      <NoteForm
      buttonLabel="Create"
        onSubmit={async (title, content) => {
            createNote(title, content);
            router.push('/notes');
        }}
      />
    </div>
  );
}