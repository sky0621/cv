"use client";

import { Box, IconButton, Typography } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        backgroundColor: "#f5f5f5",
        zIndex: 1100,
        padding: 1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography level="h4">Dashboard</Typography>
        <IconButton
          onClick={onMenuClick}
          sx={{ display: { xs: "inline-flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
