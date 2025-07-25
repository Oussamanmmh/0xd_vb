'use client';
import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/context/langage-context';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Find the current language object based on the context
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[1]; // Français as default

  const handleLanguageSelect = (selectedLang: Language) => {
    setLanguage(selectedLang.code as 'en'|'fr'|'ar'); // Update the context
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 left-4 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-32 px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-sm font-medium">{selectedLanguage.name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
         
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-20">
            <ul role="listbox" className="py-1">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleLanguageSelect(lang)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm text-white hover:bg-gray-800 transition-colors"
                    role="option"
                    aria-selected={language === lang.code}
                  >
                    <span className={lang.code === 'ar' ? 'font-arabic' : 'font-medium'}>
                      {lang.name}
                    </span>
                    {language === lang.code && (
                      <Check className="w-4 h-4 text-blue-400" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}