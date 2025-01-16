"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/interfaces/AboutInterfaces";
import { ICareerGroup } from "@/app/_components/interfaces/CareerInterfaces";
import { INote } from "@/app/_components/interfaces/NoteInterfaces";
import React from "react";
import { Tab, tabClasses, TabList, TabPanel, Tabs } from "@mui/joy";
import AttributionIcon from "@mui/icons-material/Attribution";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LaptopIcon from "@mui/icons-material/Laptop";
import AttributePage from "@/app/_components/Attribute/page";
import CareerPage from "@/app/_components/Career/page";
import NotePage from "@/app/_components/Note/page";
import SkillPage from "@/app/_components/Skill/page";
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
  return (
    <Tabs
      aria-label="Dashboard Tabs"
      size="lg"
      defaultValue="attribute"
      sx={{ bgcolor: "transparent" }}
    >
      <TabList
        sticky="top"
        disableUnderline
        sx={{
          p: 0.4,
          gap: 0.4,
          borderRadius: "lg",
          bgcolor: "background.level2",
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "md",
            bgcolor: "background.level1",
          },
        }}
      >
        <Tab value="attribute">
          <AttributionIcon />
          Attribute
        </Tab>
        <Tab value="skill">
          <LaptopIcon />
          Skill
        </Tab>
        <Tab value="career">
          <EditNoteIcon />
          Career
        </Tab>
        <Tab value="note">
          <ErrorOutlineIcon />
          Note
        </Tab>
      </TabList>
      <TabPanel value="attribute">
        <AttributePage
          attribute={props.attribute}
          activities={props.activities}
          qualifications={props.qualifications}
        />
      </TabPanel>
      <TabPanel value="skill">
        <SkillPage skills={props.skills} />
      </TabPanel>
      <TabPanel value="career">
        <CareerPage careerGroups={props.careerGroups} />
      </TabPanel>
      <TabPanel value="note">
        <NotePage notes={props.notes} />
      </TabPanel>
    </Tabs>
  );
}
