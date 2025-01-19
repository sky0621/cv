"use client";

import { Box, Container } from "@mui/joy";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import React, { useState } from "react";

type Props = {
  avatarUrl: string;
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* サイドバー */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* メインコンテンツ */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header
          avatarUrl={props.avatarUrl}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <Container sx={{ flex: 1, py: 2 }}>{props.children}</Container>
      </Box>
    </Box>
  );
}
