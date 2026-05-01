import React from "react";
import { Great_Vibes } from "next/font/google";
import { ChangeThemeButton } from "~/components/common/change-theme-button";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border/30 bg-mainBackground/90 px-6 py-3 text-secondary backdrop-blur-md transition-bgColor duration-500 dark:border-borderDark/15 dark:bg-mainBackgroundDark/90 dark:text-secondaryDark">
        <a href="/" className="flex-shrink-0">
          <h1
            className={`text-xl font-bold text-primary transition-colors hover:text-primaryDark sm:text-3xl ${GreatVibes.className}`}
          >
            F
          </h1>
        </a>
        <nav className="flex w-full justify-center gap-10 text-sm font-bold uppercase tracking-[0.2em] sm:gap-14 sm:text-base">
          <a
            href="/drills"
            className="group relative py-1 transition-colors duration-200 hover:text-primary dark:hover:text-primaryDark"
          >
            Drills
            <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full dark:bg-primaryDark" />
          </a>
          <a
            href="/upload"
            className="group relative py-1 transition-colors duration-200 hover:text-primary dark:hover:text-primaryDark"
          >
            Upload
            <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full dark:bg-primaryDark" />
          </a>
        </nav>
        <ChangeThemeButton />
      </header>
      <main className="flex min-h-screen flex-1 flex-col items-center gap-4 bg-mainBackground transition-bgColor duration-500 ease-in-out dark:bg-mainBackgroundDark">
        {children}
      </main>
    </>
  );
};

export default Layout;
