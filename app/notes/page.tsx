"use client";

import NoteCard from '@/components/NoteCard';
import { useNotes } from '@/hooks/useNotes';

export default function NotesPage() {
  const { notes } = useNotes();

  return (
    <div className="min-h-screen bg-[#242424]" >
        <div className="w-75 h-screen p-4 border-r-[0.5px] border-[rgb(255,255,255,0.25)]">
          <div className="flex mx-auto items-center justify-between">
            <h1 className="text-2xl font-bold">Notes</h1>
            <a
              href="/notes/new">
                <img src="/new.svg" alt="New Note" className="w-6 h-6 inline-block mr-2"/>
            </a>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {notes.length === 0 ? (
          <p className="text-gray-400">No notes yet.</p>
        ) : (
          notes.map((note) => <NoteCard key={note.id} note={note} />)
        )}
      </div>
      </div>

      
    </div>
    );
}