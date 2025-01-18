"use client";

import {
  IActivity,
  IAttribute,
  IQualification,
} from "@/app/_components/interfaces/AboutInterfaces";
import { ICareerGroup } from "@/app/_components/interfaces/CareerInterfaces";
import { INote } from "@/app/_components/interfaces/NoteInterfaces";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/joy";
import { ISkill } from "@/app/_components/interfaces/SkillInterfaces";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

type Props = {
  attribute: IAttribute;
  activities: IActivity[];
  qualifications: IQualification[];
  careerGroups: ICareerGroup[];
  skills: ISkill[];
  notes: INote[];
};

export default function Dashboard(props: Props) {
  console.info(props);
  const [isClient, setIsClient] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // クライアントサイドでクラスを設定
    setIsClient(true);
  }, []);

  return (
    <div className={isClient ? "client-rendered" : ""}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* サイドバー */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* メインコンテンツ */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <Container sx={{ flex: 1, py: 2 }}>
            <Typography level="h1">Main Content</Typography>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
