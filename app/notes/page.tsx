"use client";

import NoteCard from '@/components/NoteCard';
import { useNotes } from '@/hooks/useNotes';

export default function NotesPage() {
  const { notes } = useNotes();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Notes</h1>

      <a
        href="/notes/new"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        + New Note
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {notes.length === 0 ? (
          <p className="text-gray-400">No notes yet.</p>
        ) : (
          notes.map((note) => <NoteCard key={note.id} note={note} />)
        )}
      </div>
    </div>
    );
}