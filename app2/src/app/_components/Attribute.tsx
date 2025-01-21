"use client";

import { Box } from "@mui/joy";
import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/_interfaces/attribute";
import AttributeArea from "@/app/_components/_components/AttributeArea";
import ActivityArea from "@/app/_components/_components/ActivityArea";
import QualificationArea from "@/app/_components/_components/QualificationArea";

type Props = {
  attribute: IAttribute;
  activities: IActivity[];
  qualifications: IQualification[];
};

export default function Attribute(props: Props) {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      <AttributeArea attribute={props.attribute} />
      <ActivityArea activities={props.activities} />
      <QualificationArea qualifications={props.qualifications} />
    </Box>
  );
}
