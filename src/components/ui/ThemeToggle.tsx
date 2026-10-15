"use client";

import { useSyncExternalStore, useState } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const current = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
      return current || "dark";
    }
    return "dark";
  });

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {
      console.warn("Unable to save theme in localStorage", e);
    }
  };

  if (!isMounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-subtle hover:border-strong bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)] text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--text-primary)] transition-transform duration-500 hover:-rotate-12" />
      )}
    </button>
  );
}
