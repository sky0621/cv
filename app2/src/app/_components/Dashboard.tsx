"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/interfaces/AboutInterfaces";
import { ICareerGroup } from "@/app/_components/interfaces/CareerInterfaces";
import { INote } from "@/app/_components/interfaces/NoteInterfaces";
import React from "react";
import { ListItemDecorator, Tab, TabList, TabPanel, Tabs } from "@mui/joy";
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
      orientation="horizontal"
      size="lg"
      defaultValue="attribute"
    >
      <TabList disableUnderline variant="soft" sticky="top">
        <Tab value="attribute">
          <ListItemDecorator>
            <AttributionIcon />
          </ListItemDecorator>
          Attribute
        </Tab>
        <Tab value="skill">
          <ListItemDecorator>
            <LaptopIcon />
          </ListItemDecorator>
          Skill
        </Tab>
        <Tab value="career">
          <ListItemDecorator>
            <EditNoteIcon />
          </ListItemDecorator>
          Career
        </Tab>
        <Tab value="note">
          <ListItemDecorator>
            <ErrorOutlineIcon />
          </ListItemDecorator>
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
