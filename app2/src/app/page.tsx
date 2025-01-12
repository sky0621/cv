import fs from "fs";
import path from "path";

import AboutSection from "./_components/AboutSection";
import CareerSection from "./_components/CareerSection";
import SkillSection from "./_components/SkillSection";
import NoteSection from "./_components/NoteSection";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "./_components/interfaces/AboutInterfaces";
import { ICareerGroup } from "./_components/interfaces/CareerInterfaces";
import { ISkillsFile } from "./_components/interfaces/SkillInterfaces";
import { INote } from "./_components/interfaces/NoteInterfaces";

export const revalidate = 0;

export default async function Page() {
  const basePath = path.join(process.cwd(), "public", "data");
  const attrFile = path.join(basePath, "attribute.json");
  const actFile = path.join(basePath, "activities.json");
  const qualFile = path.join(basePath, "qualifications.json");
  const careerFile = path.join(basePath, "careergroups.json");
  const skillFile = path.join(basePath, "skills.json");
  const noteFile = path.join(basePath, "notes.json");

  let attribute: IAttribute | null = null;
  let activities: IActivity[] = [];
  let qualifications: IQualification[] = [];
  let careerGroups: ICareerGroup[] = [];
  let skills: ISkillsFile = { skills: [], tagName: "" };
  let notes: INote[] = [];

  try {
    const attrRaw = fs.readFileSync(attrFile, "utf-8");
    attribute = JSON.parse(attrRaw);

    const actRaw = fs.readFileSync(actFile, "utf-8");
    activities = JSON.parse(actRaw);

    const qualRaw = fs.readFileSync(qualFile, "utf-8");
    qualifications = JSON.parse(qualRaw);

    const careerRaw = fs.readFileSync(careerFile, "utf-8");
    careerGroups = JSON.parse(careerRaw);

    const skillRaw = fs.readFileSync(skillFile, "utf-8");
    skills = JSON.parse(skillRaw);

    const noteRaw = fs.readFileSync(noteFile, "utf-8");
    notes = JSON.parse(noteRaw);
  } catch (err) {
    console.error("Failed to read JSON files:", err);
  }

  return (
    <main
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h1>CV</h1>
      <hr />

      <AboutSection
        attribute={attribute}
        activities={activities}
        qualifications={qualifications}
      />

      <CareerSection careerGroups={careerGroups} />

      <SkillSection skills={skills} />

      <NoteSection notes={notes} />
    </main>
  );
}
