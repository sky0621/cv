"use client";

import { useEffect, useState } from "react";
import { Box, Drawer, IconButton, List } from "@mui/joy";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SideItem from "@/components/Sidebar/SideItem/SideItem";
import FaceIcon from "@mui/icons-material/Face";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobileQuery = useMediaQuery("(max-width:600px)");
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  useEffect(() => {
    // クライアントサイドでのみモバイル判定を適用
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const sidebarContent = (
    <Box
      sx={{
        width: isCollapsed ? 50 : 120,
        transition: "width 0.3s",
        bgColor: "background.level1",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: isCollapsed && !isMobile ? "center" : "flex-start",
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: isCollapsed ? "center" : "flex-end",
            width: "100%",
            padding: 1,
          }}
        >
          <IconButton onClick={toggleSidebar}>
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      )}

      <List>
        <SideItem
          key="attribute"
          label="Attribute"
          linkUrl="/"
          collapsed={isCollapsed}
          mobile={isMobile}
        >
          <FaceIcon />
        </SideItem>
        <SideItem
          key="skill"
          label="Skill"
          linkUrl="/skill"
          collapsed={isCollapsed}
          mobile={isMobile}
        >
          <TerminalIcon />
        </SideItem>
        <SideItem
          key="career"
          label="Career"
          linkUrl="/career"
          collapsed={isCollapsed}
          mobile={isMobile}
        >
          <ViewTimelineOutlinedIcon />
        </SideItem>
        <SideItem
          key="note"
          label="Note"
          linkUrl="/note"
          collapsed={isCollapsed}
          mobile={isMobile}
        >
          <EditNoteIcon />
        </SideItem>
      </List>
    </Box>
  );

  return isMobile ? (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 150,
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  ) : (
    sidebarContent
  );
}
