import React from "react";
import path from "path";
import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/AboutInterfaces";
import fs from "fs";
import Attribute from "@/app/_components/Attribute";

export default function DashboardPage() {
  const basePath = path.join(process.cwd(), "public", "data");
  const attrFile = path.join(basePath, "attribute.json");
  const actFile = path.join(basePath, "activities.json");
  const qualFile = path.join(basePath, "qualifications.json");

  let attribute: IAttribute | null = null;
  let activities: IActivity[] = [];
  let qualifications: IQualification[] = [];

  try {
    const attrRaw = fs.readFileSync(attrFile, "utf-8");
    attribute = JSON.parse(attrRaw);

    const actRaw = fs.readFileSync(actFile, "utf-8");
    activities = JSON.parse(actRaw);

    const qualRaw = fs.readFileSync(qualFile, "utf-8");
    qualifications = JSON.parse(qualRaw);
  } catch (err) {
    console.error("Failed to read JSON files:", err);
  }
  return (
    <Attribute
      attribute={attribute!}
      activities={activities}
      qualifications={qualifications}
    />
  );
}
