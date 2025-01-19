"use client";

import { Box, Container } from "@mui/joy";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* サイドバー */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* メインコンテンツ */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header avatarUrl="" onMenuClick={() => setSidebarOpen(true)} />
        <Container sx={{ flex: 1, py: 2 }}>{children}</Container>
      </Box>
    </Box>
  );
}
