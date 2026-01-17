import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Providers } from "~/hooks/providers";

export const metadata = {
  title: "Fancy Driller",
  description: "Drill for exams in a fancy way",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`bg-gradient-to-b from-secondary to-black text-secondaryDark ${GeistSans.variable}`}
    >
      <body className="min-h-screen">
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
