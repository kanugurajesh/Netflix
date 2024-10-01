"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
      {theme === "light" ? (
        <RiMoonLine/>
      ) : (
        <RiSunLine/>
      )}
    </button>
  );
};

export default DarkModeToggle;