'use client';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from '@/components/button/Button';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="hover:scale-110 transition-all duration-200 hover:bg-accent"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
       {isDark ? (
         <>
           <FaSun className="w-4 h-4 mr-2" aria-hidden="true" />
           Light
         </>
       ) : (
         <>
           <FaMoon className="w-4 h-4 mr-2" aria-hidden="true" />
           Dark
         </>
       )}
    </Button>
  );
};