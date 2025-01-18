"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/joy";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardPage() {
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
