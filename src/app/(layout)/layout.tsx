import React from "react";
import { Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-mainBackground flex items-center justify-between px-6 py-4 text-secondary">
        <a href="/">
          <h1
            className={`text-xl font-bold text-primary sm:text-3xl ${GreatVibes.className}`}
          >
            F
          </h1>
        </a>
        <div className="text-md xl:text-md flex w-full justify-center gap-4 font-bold uppercase sm:gap-12">
          <a
            href="/drills"
            className="transition duration-200 hover:text-primary"
          >
            Drills
          </a>
          <span className="border-mainBackgroundGradient border-r-2" />
          <a
            href="/upload"
            className="transition duration-200 hover:text-primary"
          >
            Upload
          </a>
        </div>
      </header>
      <main className="to-mainBackground from-mainBackground flex min-h-screen flex-1 flex-col items-center gap-4 bg-gradient-to-b px-2">
        {children}
      </main>
    </>
  );
};

export default Layout;
