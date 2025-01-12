"use client";

import React from "react";
import { ICareerGroup } from "./interfaces/CareerInterfaces";
import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

type CareerProps = {
  careerGroups: ICareerGroup[];
};

export default function CareerSection({ careerGroups }: CareerProps) {
  return (
    <Box id="career">
      <Typography variant="h4" gutterBottom>
        Career
      </Typography>

      {careerGroups.map((group) => (
        <Box key={group.id} sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            {group.label}
          </Typography>
          {group.careers.map((career) => {
            const fromStr = `${career.from.year}/${String(
              career.from.month
            ).padStart(2, "0")}`;
            const toStr = career.to
              ? `${career.to.year}/${String(career.to.month).padStart(2, "0")}`
              : "Present";

            return (
              <Card key={career.id} variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">{career.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    期間: {fromStr} - {toStr}
                  </Typography>

                  {/* Description */}
                  {career.description.length > 0 && (
                    <List sx={{ listStyleType: "disc", pl: 4 }}>
                      {career.description.map((desc, idx) => (
                        <ListItem
                          key={idx}
                          sx={{ display: "list-item", pl: 0 }}
                        >
                          <ListItemText primary={desc} />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  <Divider sx={{ my: 1 }} />

                  {/* Tasks */}
                  <Typography fontWeight="bold" sx={{ mt: 1 }}>
                    Tasks:
                  </Typography>
                  {career.tasks.map((task, idx) => (
                    <Box key={idx} sx={{ mt: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {task.name}:
                      </Typography>
                      <List sx={{ listStyleType: "circle", pl: 4 }}>
                        {task.description.map((d, i) => (
                          <ListItem
                            key={i}
                            sx={{ display: "list-item", pl: 0 }}
                          >
                            {d}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}

                  <Divider sx={{ my: 1 }} />

                  {/* skillGroups */}
                  <Typography fontWeight="bold" sx={{ mt: 1 }}>
                    Skills:
                  </Typography>
                  {career.skillGroups.map((sg, i) => (
                    <Box key={i} sx={{ mt: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {sg.label}
                      </Typography>
                      <List sx={{ listStyleType: "circle", pl: 4 }}>
                        {sg.skills.map((s, j) => (
                          <ListItem
                            key={j}
                            sx={{ display: "list-item", pl: 0 }}
                          >
                            <ListItemText
                              primary={
                                <>
                                  {s.skill.name}
                                  {s.version && <>（{s.version}）</>}
                                  {s.skill.url && (
                                    <>
                                      {" - "}
                                      <a
                                        href={s.skill.url}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        {s.skill.url}
                                      </a>
                                    </>
                                  )}
                                </>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
