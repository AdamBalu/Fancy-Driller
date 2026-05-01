"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@mui/base";

export const ChangeThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI (prevents hydration warnings)
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Button
        name="change theme"
        disabled={!mounted}
        className="static top-3 z-10 rounded-md py-2 font-semibold"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {!mounted ? (
          <Moon className="invisible h-6 w-6" />
        ) : theme === "light" ? (
          <Moon className="transition-translate duration-500 ease-in-out hover:-rotate-45 hover:fill-secondary" />
        ) : (
          <Sun className="transition-translate duration-500 ease-in-out hover:-rotate-45 hover:fill-secondaryDark" />
        )}
      </Button>
    </div>
  );
};
