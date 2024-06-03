'use client';
import React from "react";

export const Button = ({ children, onClick, className }: { children: React.ReactNode, onClick: () => void, className?: string }) => {
    return <button onClick={onClick} className={`${className ?? ""} 
    flex  text-center max-w-sm flex-col gap-4 rounded-md p-4 text-xl items-center text-white hover:text-[#9E1899] border-2 hover:border-[#FF00F5] transition duration-200 ease-in-out active:scale-95`}>{children}</button>
}
