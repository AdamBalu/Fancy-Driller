import React from "react";
import {Great_Vibes} from "next/font/google";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="flex items-center justify-between py-4 px-6 text-white">
                <a href="/">
                    <h1 className={`text-xl sm:text-3xl font-bold text-[#9E1899] ${GreatVibes.className}`}>F</h1>
                </a>
                <div className="flex gap-4 sm:gap-12 w-full justify-center uppercase font-bold text-md xl:text-md">
                    <a href="/drills" className="hover:text-[#9E1899] transition duration-200">Drills</a>
                    <span className="border-r-2 border-[#470C45]" />
                    <a href="/upload" className="hover:text-[#9E1899] transition duration-200">Upload</a>
                </div>
            </header>
            <main className="flex-1 flex flex-col gap-4 items-center">
                {children}
            </main>
        </>
    )
}

export default Layout;