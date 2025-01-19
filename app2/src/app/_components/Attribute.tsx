"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/AboutInterfaces";
import { Box, Card, CardContent, Typography } from "@mui/joy";
import calculateAge from "@/app/_components/AgeCalculator/AgeCalculator";
import { CardMedia } from "@mui/material";
import { DateTime } from "luxon";

type Props = {
  attribute: IAttribute;
  activities: IActivity[];
  qualifications: IQualification[];
};

export default function Attribute(props: Props) {
  const age = calculateAge(
    props.attribute.birthday.year,
    props.attribute.birthday.month,
    props.attribute.birthday.day
  );
  const today = DateTime.now().toFormat("yyyy/MM/dd");
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      <Card variant="outlined" orientation="vertical">
        <Card
          variant="plain"
          orientation="horizontal"
          sx={{ flexGrow: 1, alignItems: "center" }}
        >
          <CardMedia>
            <img
              src={props.attribute.avatarUrl}
              alt={props.attribute.nickname}
              loading="lazy"
            />
          </CardMedia>
          <CardContent>
            <Typography level="title-lg">{props.attribute.nickname}</Typography>
            <Typography level="body-md">
              <span style={{ fontSize: "0.8rem" }}>Age:</span> {age}{" "}
              <span style={{ fontSize: "0.8rem" }}>( {today} now )</span>
            </Typography>
            <Typography level="body-md">
              <span style={{ fontSize: "0.8rem" }}>Job:</span>{" "}
              {props.attribute.job}
            </Typography>
            <Typography level="body-md">
              <span style={{ fontSize: "0.8rem" }}>BelongTo:</span>{" "}
              {props.attribute.belongTo}
            </Typography>
          </CardContent>
        </Card>
        <Card orientation="vertical">
          <CardContent>
            {props.attribute.pr.split("\n").map((line, index) => (
              <div key={index}>
                {line}
                <br />
              </div>
            ))}
          </CardContent>
        </Card>
      </Card>
      <Card>
        <div>
          <div>
            {props.activities.map((activity, i) => (
              <div key={i}>
                <div>name: {activity.name}</div>
                <div>icon: {activity.icon}</div>
                <div>url: {activity.url}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>Qualification</div>
          <div>
            {props.qualifications.map((qualification, i) => (
              <div key={i}>
                <div>name: {qualification.name}</div>
                <div>url: {qualification.url}</div>
                <div>organization: {qualification.organization}</div>
                <div>memo: {qualification.memo}</div>
                <div>gotDate: {qualification.gotDate}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Box>
  );
}
