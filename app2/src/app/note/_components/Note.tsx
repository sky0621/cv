"use client";

import { INote } from "@/app/note/_components/_interfaces/note";
import { Box, Card, CardContent, Typography } from "@mui/joy";
import { CardHeader } from "@mui/material";

type Props = {
  notes: INote[];
};

export default function Note(props: Props) {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      {props.notes.map((note, i) => (
        <Card key={i}>
          <CardHeader
            title={note.label}
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          />
          <CardContent>
            <Typography level="body-md">{note.memo}</Typography>
            <div>
              {note.items.map((item, i) => (
                <div key={i} style={{ marginBottom: "0.5rem" }}>
                  {item.text}
                  <br />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
