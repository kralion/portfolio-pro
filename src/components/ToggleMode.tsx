import React, { useState, useEffect } from "react";
import { IconDeviceImac, IconSun, IconMoon } from "@tabler/icons-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme: React.SetStateAction<string>) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center w-fit mx-auto border border-slate-200 dark:border-slate-800 justify-center p-0.5  rounded-full transition-colors duration-300">
      <button
        onClick={() => toggleTheme("system")}
        className={`p-2 rounded-full transition-colors duration-300 ${
          theme === "system"
            ? "bg-white dark:bg-zinc-700 text-black dark:text-white shadow-md"
            : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        }`}
        aria-label="System theme"
      >
        <IconDeviceImac className="w-5 h-5" />
      </button>
      <button
        onClick={() => toggleTheme("light")}
        className={`p-2 rounded-full transition-colors duration-300 ${
          theme === "light"
            ? "bg-white text-black shadow-md"
            : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        }`}
        aria-label="Light theme"
      >
        <IconSun className="w-5 h-5" />
      </button>
      <button
        onClick={() => toggleTheme("dark")}
        className={`p-2 rounded-full transition-colors duration-300 ${
          theme === "dark"
            ? "bg-zinc-700 text-white shadow-md"
            : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        }`}
        aria-label="Dark theme"
      >
        <IconMoon className="w-5 h-5" />
      </button>
    </div>
  );
};
