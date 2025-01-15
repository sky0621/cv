"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/interfaces/AboutInterfaces";
import {
  ICareer,
  ICareerGroup,
} from "@/app/_components/interfaces/CareerInterfaces";
import { ISkillDetail } from "@/app/_components/interfaces/SkillInterfaces";
import { INote } from "@/app/_components/interfaces/NoteInterfaces";
import React from "react";
import {
  CircularProgress,
  ListItemDecorator,
  Sheet,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "@mui/joy";
import AttributionIcon from "@mui/icons-material/Attribution";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LaptopIcon from "@mui/icons-material/Laptop";
import AttributePage from "@/app/_components/Attribute/page";
import CareerPage from "@/app/_components/Career/page";
import NotePage from "@/app/_components/Note/page";
import SkillPage from "@/app/_components/Skill/page";

type Props = {
  attribute: IAttribute | null;
  activities: IActivity[];
  qualifications: IQualification[];
  careerGroups: ICareerGroup[];
  skills: ISkillDetail[];
  notes: INote[];
};

export default function Dashboard(props: Props) {
  return (
    <div>
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
          <AttributePage />
        </TabPanel>
        <TabPanel value="skill">
          <SkillPage />
        </TabPanel>
        <TabPanel value="career">
          <CareerPage />
        </TabPanel>
        <TabPanel value="note">
          <NotePage />
        </TabPanel>
      </Tabs>
      <div>
        <Sheet variant="outlined">Welcome!</Sheet>
      </div>
      <div>
        <CircularProgress />
      </div>
      <div>{props.attribute?.name}</div>
      <div>
        {props.careerGroups?.map((careerGroup: ICareerGroup, idx: number) => (
          <div key={idx}>
            <div>{careerGroup.id}</div>
            <div>{careerGroup.label}</div>
            <div>
              {careerGroup.careers.map((career: ICareer, idx2: number) => (
                <div key={idx2}>
                  <div>{career.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    // </CssVarsProvider>
  );
}
