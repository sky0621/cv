"use client";

import { Card, CardContent, Link, Stack } from "@mui/joy";
import { CardHeader } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { IActivity } from "@/app/_components/_interfaces/attribute";

type Props = {
  activities: IActivity[];
};

export default function ActivityArea(props: Props) {
  const activityIcon = (iconName: string) => {
    switch (iconName) {
      case "pi pi-github":
        return <GitHubIcon />;
      default:
        return <LanguageIcon />;
    }
  };
  return (
    <Card>
      <CardHeader
        title="Activities"
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      />
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
  );
}
