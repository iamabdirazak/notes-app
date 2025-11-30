"use client";

import { useState, useEffect } from "react";
import type { Note } from "@/types/note";

const STORAGE_KEY = "notes_app_data";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const createNote = (title: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      updatedAt: Date.now(),
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const updateNote = (id: string, title: string, content: string) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, title, content, updatedAt: Date.now() } : n
      )
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const getNote = (id: string) => {
    return notes.find((n) => n.id === id);
  };

  return {
    notes,
    createNote,
    updateNote,
    deleteNote,
    getNote,
  };
}