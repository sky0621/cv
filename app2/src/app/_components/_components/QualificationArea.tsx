"use client";

import { Card, CardContent, Link, Stack, Typography } from "@mui/joy";
import { CardHeader } from "@mui/material";
import { IQualification } from "@/app/_components/_interfaces/attribute";

type Props = {
  qualifications: IQualification[];
};

export default function QualificationArea(props: Props) {
  const labelFontSize = "0.8rem";
  return (
    <Card>
      <CardHeader
        title="Qualifications"
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      />
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
                <span style={{ fontSize: labelFontSize }}>Date:</span>{" "}
                {qualification.gotDate}
              </Typography>
              <Typography level="body-md">
                <span style={{ fontSize: labelFontSize }}>Job:</span>{" "}
                {qualification.organization}
              </Typography>
              <Typography level="body-md">
                <span style={{ fontSize: labelFontSize }}>Note:</span>{" "}
                {qualification.memo}
              </Typography>
            </Stack>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
