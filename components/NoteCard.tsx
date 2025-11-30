"use client";

import Link from "next/link";
import type { Note } from "@/types/note";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="block p-4 border border-gray-700 rounded-xl hover:bg-gray-800 transition"
    >
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="text-gray-400 mt-1 text-sm line-clamp-2">
        {note.content}
      </p>
      <p className="text-gray-500 mt-2 text-xs">
        {new Date(note.updatedAt).toLocaleString()}
      </p>
    </Link>
    );
}