'use client';
import { useCallback, useSyncExternalStore } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from '@/components/button/Button';

function getThemeSnapshot() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme === 'dark' || (!savedTheme && prefersDark);
}

function subscribeToTheme(callback: () => void) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', callback);
  window.addEventListener('storage', callback);
  return () => {
    mq.removeEventListener('change', callback);
    window.removeEventListener('storage', callback);
  };
}

export const ThemeToggle = () => {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => false,
  );

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Notify subscribers
    window.dispatchEvent(new Event('storage'));
  }, [isDark]);

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



