# Notes App

A minimal notes application built with Next.js and TypeScript, designed with a clean structure and simple interactions. Notes are created, edited, and stored locally using the browser’s localStorage.

## Overview

The app provides a lightweight way to capture and manage notes without external services or databases. All data stays on the device, ensuring fast access and simplicity.

## Development

Start the development server:

```bash
npm run dev
```

Then open the app at `http://localhost:3000`.

## Project Structure

- `app/notes` – routes for listing, creating, and editing notes  
- `components/` – reusable UI building blocks  
- `hooks/` – custom logic for managing application state  
- `types/` – shared TypeScript models

This layout keeps logic, UI, and routing organized and easy to maintain.

## Data Storage

All notes are stored in `localStorage`. Closing or refreshing the browser keeps your notes intact.

## Requirements

- Node.js

## Author

Abdirazak Mubarak  
November 30, 2025