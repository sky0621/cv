import type { Metadata } from "next";
import React from "react";
import "@fontsource/inter";
import ThemeRegistry from "@/app/_components/ThemeRegistry/ThemeRegistry";

export const metadata: Metadata = {
  title: "sky0621 - CV",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
