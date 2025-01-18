import React from "react";
import path from "path";
import { ICareerGroup } from "@/app/career/_components/CareerInterfaces";
import fs from "fs";
import Career from "@/app/career/_components/Career";

export default function CareerPage() {
  const basePath = path.join(process.cwd(), "public", "data");
  const careerFile = path.join(basePath, "careergroups.json");
  let careerGroups: ICareerGroup[] = [];
  try {
    const careerRaw = fs.readFileSync(careerFile, "utf-8");
    careerGroups = JSON.parse(careerRaw);
  } catch (err) {
    console.error("Failed to read JSON files:", err);
  }
  return <Career careerGroups={careerGroups} />;
}
