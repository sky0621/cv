"use client";

import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div></div>;
  return (
    <>
      {/* MUIリセット */}
      <CssBaseline />
      {children}
    </>
  );
}
