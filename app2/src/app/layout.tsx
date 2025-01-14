import type { Metadata } from "next";
import React from "react";

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
      <body>{children}</body>
    </html>
  );
}
