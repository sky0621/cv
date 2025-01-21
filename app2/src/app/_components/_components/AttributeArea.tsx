"use client";

import { Card, CardContent, Typography } from "@mui/joy";
import { CardMedia } from "@mui/material";
import { DateTime } from "luxon";
import calculateAge from "@/app/_components/_functions/calculateAge";
import { IAttribute } from "@/app/_components/_interfaces/attribute";

type Props = {
  attribute: IAttribute;
};

export default function AttributeArea(props: Props) {
  const age = calculateAge(
    props.attribute.birthday.year,
    props.attribute.birthday.month,
    props.attribute.birthday.day
  );
  const today = DateTime.now().toFormat("yyyy/MM/dd");
  const labelFontSize = "0.8rem";
  return (
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
            <span style={{ fontSize: labelFontSize }}>Age:</span> {age}{" "}
            <span style={{ fontSize: labelFontSize }}>( {today} now )</span>
          </Typography>
          <Typography level="body-md">
            <span style={{ fontSize: labelFontSize }}>Job:</span>{" "}
            {props.attribute.job}
          </Typography>
          <Typography level="body-md">
            <span style={{ fontSize: labelFontSize }}>BelongTo:</span>{" "}
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
  );
}
