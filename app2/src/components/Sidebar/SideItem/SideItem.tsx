import { Link, ListItem, Stack } from "@mui/joy";
import React from "react";

type Props = {
  key: string;
  label: string;
  linkUrl: string;
  collapsed: boolean;
  mobile: boolean;
  children: React.ReactNode;
};

export default function SideItem(props: Props) {
  return (
    <ListItem key={props.key} sx={{ display: "block" }}>
      <Link
        href={props.linkUrl}
        underline="none"
        variant="soft"
        color="neutral"
        sx={{
          padding: "0.3rem",
          borderRadius: "0.5rem",
          width: props.collapsed ? 30 : 120,
        }}
      >
        <Stack direction="row" sx={{ marginRight: 0.5 }}>
          {props.children}
        </Stack>
        {props.collapsed && !props.mobile ? "" : props.label}
      </Link>
    </ListItem>
  );
}
