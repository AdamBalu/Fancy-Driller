"use client";

import React, { type ReactNode } from "react";
import { cn } from "~/lib/cn";

type CheckboxProps = {
  id: string;
  children: ReactNode;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Checkbox = ({
  id,
  children,
  checked,
  onChange,
  className,
}: CheckboxProps) => (
  <label
    htmlFor={id}
    className={cn(
      "flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-xs font-medium transition duration-300 ease-in-out sm:text-base",
      checked
        ? "bg-primaryCardHovered text-secondary dark:bg-orderButton dark:text-secondaryDark"
        : "bg-secondary/5 text-secondary/60 hover:bg-secondary/10 hover:text-secondary dark:bg-secondaryDark/5 dark:text-secondaryDark/60 dark:hover:bg-secondaryDark/10 dark:hover:text-secondaryDark",
      className,
    )}
  >
    <input
      onChange={onChange}
      type="checkbox"
      id={id}
      className="sr-only"
      checked={checked}
    />
    {children}
  </label>
);

export default Checkbox;
