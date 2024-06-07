"use client";

import React, { type ReactNode } from "react";

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
  <div className="transition-color flex items-center gap-2 text-xs text-secondary duration-500 ease-in-out dark:text-secondaryDark sm:text-base">
    <input
      onChange={onChange}
      type="checkbox"
      id={id}
      className={`accent-primary dark:accent-primaryDark ${className}`}
      checked={checked}
    />
    <label htmlFor={id}>{children}</label>
  </div>
);

export default Checkbox;
