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
        "bg-button flex max-w-sm flex-col items-center gap-4 rounded-md border p-3 text-center text-xs font-bold text-secondaryButton hover:bg-primaryDark dark:border-2 dark:border-secondaryDark dark:bg-transparent dark:font-normal dark:text-secondaryDark sm:p-4 sm:text-base " +
          "transition duration-300 ease-in-out hover:border-border hover:bg-primaryCardHovered active:scale-95 hover:dark:border-borderDark dark:hover:text-primaryDark hover:dark:text-primaryDark",
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
