"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/AboutInterfaces";
import { Box, Card, CardContent, Link, Stack, Typography } from "@mui/joy";
import calculateAge from "@/app/_components/AgeCalculator/AgeCalculator";
import { CardHeader, CardMedia } from "@mui/material";
import { DateTime } from "luxon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

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
  const activityIcon = (iconName: string) => {
    switch (iconName) {
      case "pi pi-github":
        return <GitHubIcon />;
      default:
        return <LanguageIcon />;
    }
  };
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
        <CardHeader title="Activities" />
        <CardContent orientation="horizontal">
          {props.activities.map((activity, i) => (
            <Link
              href={activity.url}
              target="_blank"
              key={i}
              underline="none"
              variant="soft"
              color="neutral"
              sx={{
                padding: "0.5rem",
                borderRadius: "0.8rem",
              }}
            >
              <Stack direction="row" sx={{ marginRight: 0.5 }}>
                {activityIcon(activity.icon)}
              </Stack>
              <Stack>{activity.name}</Stack>
            </Link>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Qualifications" />
        <CardContent orientation="horizontal">
          {props.qualifications.map((qualification, i) => (
            <Link
              href={qualification.url}
              target="_blank"
              key={i}
              underline="none"
              variant="soft"
              color="neutral"
              sx={{
                padding: "0.5rem",
                borderRadius: "0.8rem",
              }}
            >
              <Stack
                direction="column"
                sx={{ marginRight: "0.5rem", padding: "0.5rem" }}
              >
                <Typography level="title-lg" sx={{ marginBottom: "0.5rem" }}>
                  {qualification.name}
                </Typography>
                <Typography level="body-md">
                  <span style={{ fontSize: "0.8rem" }}>Date:</span>{" "}
                  {qualification.gotDate}
                </Typography>
                <Typography level="body-md">
                  <span style={{ fontSize: "0.8rem" }}>Job:</span>{" "}
                  {qualification.organization}
                </Typography>
                <Typography level="body-md">
                  <span style={{ fontSize: "0.8rem" }}>Note:</span>{" "}
                  {qualification.memo}
                </Typography>
              </Stack>
            </Link>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
