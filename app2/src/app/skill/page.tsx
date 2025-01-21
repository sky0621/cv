import React from "react";
import path from "path";
import { ISkill } from "@/app/skill/_components/_interfaces/SkillInterfaces";
import fs from "fs";
import Skill from "@/app/skill/_components/Skill";

export default function SkillPage() {
  const basePath = path.join(process.cwd(), "public", "data");
  const skillFile = path.join(basePath, "skills.json");
  let skills: ISkill[] = [];
  try {
    const skillRaw = fs.readFileSync(skillFile, "utf-8");
    skills = JSON.parse(skillRaw);
  } catch (err) {
    console.error("Failed to read JSON files:", err);
  }
  return <Skill skills={skills} />;
}
