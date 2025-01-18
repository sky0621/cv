"use client";

import { INote } from "@/app/note/_components/NoteInterfaces";

type Props = {
  notes: INote[];
};

export default function Note(props: Props) {
  return (
    <div>
      {props.notes.map((note, i) => (
        <div key={i}>
          <div>label: {note.label}</div>
          <div>memo: {note.memo}</div>
          <div>
            {note.items.map((item, i) => (
              <div key={i}>{item.text}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
