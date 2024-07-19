import { IconMoon, IconSun } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

export const ToggleMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="  h-8 w-8 border border-neutral-300 dark:border-neutral-700 rounded-full backdrop-blur-sm flex items-center justify-center z-10"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <IconMoon className="h-4 w-4 text-secondary" />
      ) : (
        <IconSun className="h-4 w-4 text-primary" />
      )}
    </button>
  );
};
