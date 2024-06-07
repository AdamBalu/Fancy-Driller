"use client";

import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  forwardRef,
  type PropsWithChildren,
} from "react";
import { cn } from "~/lib/cn";

type ButtonProps = PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...buttonProps }: ButtonProps, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex max-w-sm flex-col items-center gap-4 rounded-md border-2 p-4 text-center text-secondary " +
          "transition duration-200 ease-in-out hover:border-border hover:text-primary active:scale-95",
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
