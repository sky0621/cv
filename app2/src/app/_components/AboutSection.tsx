"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "./interfaces/AboutInterfaces";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";

type AboutProps = {
  attribute: IAttribute | null;
  activities: IActivity[];
  qualifications: IQualification[];
};

export default function AboutSection({
  attribute,
  activities,
  qualifications,
}: AboutProps) {
  return (
    <Box id="about" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>

      {attribute && (
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Box display="flex" gap={2} alignItems="center">
              {/* アバター画像的に表示 */}
              <CardMedia
                component="img"
                image={attribute.avatarUrl}
                alt={attribute.nickname}
                sx={{ width: 120, height: 120, borderRadius: 2 }}
              />
              <Box>
                <Typography variant="h5">
                  {attribute.name} ({attribute.nickname})
                </Typography>
                <Typography>所属: {attribute.belongTo}</Typography>
                <Typography>職種: {attribute.job}</Typography>
                <Typography>
                  生年月日: {attribute.birthday.year}年
                  {attribute.birthday.month}月{attribute.birthday.day}日
                </Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography
                variant="body1"
                component="pre"
                sx={{ whiteSpace: "pre-wrap" }}
              >
                {attribute.pr}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Activities */}
      <Typography variant="h5" gutterBottom>
        Activities
      </Typography>
      <List>
        {activities.map((act, idx) => (
          <ListItem key={idx} sx={{ pl: 0 }}>
            {act.icon}&nbsp;
            <a href={act.url} target="_blank" rel="noreferrer">
              {act.name}
            </a>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Qualifications */}
      <Typography variant="h5" gutterBottom>
        Qualifications
      </Typography>
      <List>
        {qualifications.map((q, idx) => (
          <ListItem key={idx} sx={{ display: "block", pl: 0 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {q.name} ({q.organization})
            </Typography>
            <Typography>取得日: {q.gotDate}</Typography>
            {q.memo && (
              <Typography color="text.secondary">メモ: {q.memo}</Typography>
            )}
            <a href={q.url} target="_blank" rel="noreferrer">
              {q.url}
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
