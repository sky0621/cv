"use client";

import React from "react";
import { INote } from "./interfaces/NoteInterfaces";
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";

type NoteProps = {
  notes: INote[];
};

export default function NoteSection({ notes }: NoteProps) {
  return (
    <Box id="note">
      <Typography variant="h4" gutterBottom>
        Note
      </Typography>

      {notes.map((note, idx) => (
        <Card key={idx} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">{note.label}</Typography>
            {note.memo && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic", my: 1 }}
              >
                メモ: {note.memo}
              </Typography>
            )}
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              {note.items.map((item, i) => (
                <ListItem key={i} sx={{ display: "list-item", pl: 0 }}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
