import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import React from "react";

export const metadata = {
  title: "Fancy Driller",
  description: "A driller that you will either love or hate",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-gradient-to-b from-black to-[#150415] text-white ${GeistSans.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
