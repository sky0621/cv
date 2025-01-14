import type { Metadata } from "next";
import React from "react";
import "@fontsource/inter";
import BaseProvider from "@/app/_components/BaseProvider";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
