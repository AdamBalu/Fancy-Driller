import React from "react";
import { Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 text-white">
        <a href="/">
          <h1
            className={`text-xl font-bold text-[#9E1899] sm:text-3xl ${GreatVibes.className}`}
          >
            F
          </h1>
        </a>
        <div className="text-md xl:text-md flex w-full justify-center gap-4 font-bold uppercase sm:gap-12">
          <a
            href="/drills"
            className="transition duration-200 hover:text-[#9E1899]"
          >
            Drills
          </a>
          <span className="border-r-2 border-[#470C45]" />
          <a
            href="/upload"
            className="transition duration-200 hover:text-[#9E1899]"
          >
            Upload
          </a>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center gap-4">
        {children}
      </main>
    </>
  );
};

export default Layout;
