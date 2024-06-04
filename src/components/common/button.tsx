"use client";

import { forwardRef, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className }: ButtonProps, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`flex max-w-sm flex-col items-center gap-4 rounded-md border-2 p-4 text-center
        text-white transition duration-200 ease-in-out hover:border-[#FF00F5] hover:text-[#9E1899]
        active:scale-95 ${className}`}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
