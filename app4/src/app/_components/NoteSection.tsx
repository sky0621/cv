import React from "react";
import { INote } from "./interfaces/NoteInterfaces";

type NoteProps = {
  notes: INote[];
};

export default function NoteSection({ notes }: NoteProps) {
  return (
    <section id="note" style={{ marginTop: "2rem" }}>
      <h2>Note</h2>
      {notes.map((note, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <h3>{note.label}</h3>
          {note.memo && (
            <p style={{ fontStyle: "italic", color: "#666" }}>
              メモ: {note.memo}
            </p>
          )}
          <ul>
            {note.items.map((item, i) => (
              <li key={i}>{item.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
