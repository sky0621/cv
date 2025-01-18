"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/interfaces/AboutInterfaces";
import { ICareerGroup } from "@/app/_components/interfaces/CareerInterfaces";
import { INote } from "@/app/_components/interfaces/NoteInterfaces";
import React from "react";
import { Box } from "@mui/joy";
import { ISkill } from "@/app/_components/interfaces/SkillInterfaces";

type Props = {
  attribute: IAttribute;
  activities: IActivity[];
  qualifications: IQualification[];
  careerGroups: ICareerGroup[];
  skills: ISkill[];
  notes: INote[];
};

export default function Dashboard(props: Props) {
  return <Box sx={{ display: "flex", minHeight: "100vh" }}></Box>;
}
