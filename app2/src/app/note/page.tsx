import React from "react";
import path from "path";
import { INote } from "@/app/note/_components/NoteInterfaces";
import fs from "fs";
import Note from "@/app/note/_components/Note";

export default function NotePage() {
  const basePath = path.join(process.cwd(), "public", "data");
  const noteFile = path.join(basePath, "notes.json");
  let notes: INote[] = [];
  try {
    const noteRaw = fs.readFileSync(noteFile, "utf-8");
    notes = JSON.parse(noteRaw);
  } catch (err) {
    console.error("Failed to read JSON files:", err);
  }
  return <Note notes={notes} />;
}
