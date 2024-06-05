"use client";

import { forwardRef, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, disabled }: ButtonProps, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={`flex max-w-sm flex-col items-center gap-4 rounded-md border-2 p-4 text-center
        text-secondary transition duration-200 ease-in-out hover:border-border hover:text-primary
        active:scale-95 ${className}`}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
