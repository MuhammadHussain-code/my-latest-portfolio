import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook for managing theme (light/dark mode)
 * @returns {[string, Function]} - Current theme and function to toggle theme
 */
const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Check if there's a theme in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  const activeTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, activeTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const storedTheme = localStorage.getItem('theme');
      // Only auto-switch if user hasn't manually set a theme
      if (!storedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return [activeTheme, toggleTheme];
};

export default useThemeSwitcher;
