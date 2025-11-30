"use client";

import {useState} from "react";

export function NoteForm({
    onSubmit,
    initialTitle = "",
    initialContent = "",
    buttonLabel = "Save",
}: {
    onSubmit: (title: string, content: string) => void;
    initialTitle?: string;
    initialContent?: string;
    buttonLabel?: string;
}) {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(title, content);
            }}
            className="flex flex-col gap-4"
        >
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="p-2 border border-gray-700 rounded-lg bg-gray-900"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
                className="p-2 border border-gray-700 rounded-lg bg-gray-900 h-40 resize-none"
                required
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                {buttonLabel}
            </button>
        </form>
    );
}