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

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Button
        name="change theme"
        className="static top-3 z-10 rounded-md py-2 font-semibold"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <Moon className="transition-translate duration-500 ease-in-out hover:-rotate-45 hover:fill-secondary" />
        ) : (
          <Sun className="transition-translate duration-500 ease-in-out hover:-rotate-45 hover:fill-secondaryDark" />
        )}
      </Button>
    </div>
  );
};
