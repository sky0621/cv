"use client";

import { Avatar, Box, IconButton, Typography } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  avatarUrl: string;
  onMenuClick: () => void;
}

export default function Header(props: Props) {
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={props.avatarUrl} alt="sky0621" size="lg" />
          <Typography level="h4">sky0621 - CV</Typography>
        </Box>
        <IconButton
          onClick={props.onMenuClick}
          sx={{ display: { xs: "inline-flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
