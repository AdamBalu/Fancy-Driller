import React from "react";
import { Great_Vibes } from "next/font/google";
import { ChangeThemeButton } from "~/components/common/change-theme-button";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="flex items-center justify-between border-b-4 border-b-mainBackground bg-mainBackground px-6 py-4 text-secondary transition-bgColor duration-500 dark:border-none dark:bg-mainBackgroundDark dark:text-secondaryDark">
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
            className="transition duration-200 hover:text-primary dark:hover:text-primaryDark"
          >
            Drills
          </a>
          <span className="border-button border-r-2 dark:border-mainBackgroundGradient" />
          <a
            href="/upload"
            className="transition duration-200 hover:text-primary dark:hover:text-primaryDark"
          >
            Upload
          </a>
        </div>
        <ChangeThemeButton />
      </header>
      <main className="flex min-h-screen flex-1 flex-col items-center gap-4 bg-mainBackground transition-bgColor duration-500 ease-in-out dark:bg-mainBackgroundDark">
        {children}
      </main>
    </>
  );
};

export default Layout;
