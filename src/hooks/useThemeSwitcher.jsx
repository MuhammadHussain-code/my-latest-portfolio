import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // Check if there's a theme in localStorage, otherwise default to 'dark'
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
