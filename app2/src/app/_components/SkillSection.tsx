"use client";

import React from "react";
import { ISkillDetail } from "./interfaces/SkillInterfaces";
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";

type SkillProps = {
  skills: ISkillDetail[];
};

export default function SkillSection({ skills }: SkillProps) {
  return (
    <Box id="skill">
      <Typography variant="h4" gutterBottom>
        Skill
      </Typography>

      {skills?.map((detail, idx) => (
        <Card key={idx} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{detail.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              累計経験期間: {detail.period}ヶ月
            </Typography>
            {detail.url && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                <a href={detail.url} target="_blank" rel="noreferrer">
                  {detail.url}
                </a>
              </Typography>
            )}

            {/* Versions */}
            {detail.versions.length > 0 && (
              <List sx={{ listStyleType: "disc", pl: 4, mt: 1 }}>
                {detail.versions.map((ver, i) => {
                  const fromStr = `${ver.from.year}/${String(
                    ver.from.month
                  ).padStart(2, "0")}`;
                  const toStr = ver.to
                    ? `${ver.to.year}/${String(ver.to.month).padStart(2, "0")}`
                    : "Present";
                  return (
                    <ListItem key={i} sx={{ display: "list-item", pl: 0 }}>
                      {fromStr} - {toStr} （{ver.period ?? "-"}ヶ月）
                      {ver.version && ` / バージョン: ${ver.version}`}
                    </ListItem>
                  );
                })}
              </List>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
