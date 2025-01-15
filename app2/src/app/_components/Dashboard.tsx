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
  Tabs,
} from "@mui/joy";
import AttributionIcon from "@mui/icons-material/Attribution";

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
        defaultValue={0}
      >
        <TabList disableUnderline sticky="top">
          <Tab>
            <ListItemDecorator>
              <AttributionIcon />
            </ListItemDecorator>
            Attribute
          </Tab>
          <Tab>Skill</Tab>
          <Tab>Career</Tab>
          <Tab>Note</Tab>
        </TabList>
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
