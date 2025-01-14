"use client";

import React from "react";
// import { CssVarsProvider } from "@mui/joy/styles";
// import CssBaseline from "@mui/joy/CssBaseline";

export default function BaseProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <CssVarsProvider>
    <div>{children}</div>
    // </CssVarsProvider>
  );
}
