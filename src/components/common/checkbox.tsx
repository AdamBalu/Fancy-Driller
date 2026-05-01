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
      "flex cursor-pointer select-none items-center gap-2 rounded-md border px-3 py-2 text-xs transition duration-300 ease-in-out sm:text-base",
      checked
        ? "border-primaryCardHovered bg-primaryCard text-secondary dark:border-borderDark dark:bg-orderButton dark:text-secondaryDark"
        : "border-sortBg bg-mainBackground text-secondary/70 hover:text-secondary dark:border-orderButton dark:bg-mainBackgroundDark dark:text-secondaryDark/70 dark:hover:text-secondaryDark",
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
    <span
      className={cn(
        "block h-3 w-3 rounded-sm border border-current transition-opacity",
        checked ? "bg-current opacity-100" : "opacity-40",
      )}
    />
    {children}
  </label>
);

export default Checkbox;
