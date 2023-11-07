import React from "react";
import type { Metadata } from "next";
import { Inter } from "@next/font/google";

import "./globals.scss";

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Story", description: "Work in process" };
}

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-100">
        <main className="relative w-auto">
          <div className="px-4 pb-10 mt-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
