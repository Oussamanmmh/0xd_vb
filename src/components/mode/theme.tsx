'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    
    // Apply theme to document
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', shouldBeDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newTheme);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-40 z-50 p-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-700"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}