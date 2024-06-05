import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import React from "react";
import { QuestionContextProvider } from "~/hooks/question-context";
import { Toaster } from "react-hot-toast";

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
      className={`to-mainBackgroundGradient bg-gradient-to-b from-black text-secondary ${GeistSans.variable}`}
    >
      <body className="min-h-screen">
        <QuestionContextProvider>{children}</QuestionContextProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
