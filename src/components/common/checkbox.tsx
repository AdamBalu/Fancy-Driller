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
      "flex cursor-pointer select-none items-center rounded-md border px-4 py-2 text-xs font-medium transition duration-300 ease-in-out sm:text-base",
      checked
        ? "border-primaryCardHovered bg-primaryCard text-secondary dark:border-borderDark dark:bg-orderButton dark:text-secondaryDark"
        : "border-sortBg bg-mainBackground text-secondary/60 hover:text-secondary dark:border-orderButton dark:bg-mainBackgroundDark dark:text-secondaryDark/60 dark:hover:text-secondaryDark",
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
