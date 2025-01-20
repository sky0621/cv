import type { Metadata } from "next";
import React from "react";
import "@fontsource/inter";
import Layout from "@/components/Layout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import path from "path";
import { IAttribute } from "@/app/_components/_models/AboutInterfaces";
import fs from "fs";

export const metadata: Metadata = {
  title: "sky0621 - CV",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = path.join(process.cwd(), "public", "data");
  const attrFile = path.join(basePath, "attribute.json");
  let attribute: IAttribute | null = null;
  try {
    const attrRaw = fs.readFileSync(attrFile, "utf-8");
    attribute = JSON.parse(attrRaw);
  } catch (err) {
    console.error("Failed to read JSON files:", err);
  }
  let avatarUrl = "";
  if (attribute) {
    avatarUrl = attribute.avatarUrl;
  }
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>
          <Layout avatarUrl={avatarUrl}>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
