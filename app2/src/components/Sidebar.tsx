"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
} from "@mui/joy";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery } from "@mui/material";

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
        width: isCollapsed ? 80 : 150,
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
        {["Home", "Analytics", "Settings"].map((item, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemContent>
                {isCollapsed && !isMobile ? item[0] : item}
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return isMobile ? (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  ) : (
    sidebarContent
  );
}
