"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', label: 'English' },
  { code: 'no', label: 'Norsk' }
] as const;

export function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const locale = pathname.split('/')[1];
    if (locale && languages.some(lang => lang.code === locale)) {
      setCurrentLang(locale);
    }
  }, [pathname]);

  const getNewPathname = (langCode: string) => {
    const pathParts = pathname.split('/');
    pathParts[1] = langCode;
    return pathParts.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:text-white 
                         bg-gray-800/50 rounded-full border border-gray-700 hover:border-gray-600 
                         transition-all duration-200">
          <Globe className="h-4 w-4" />
          <span>{languages.find(lang => lang.code === currentLang)?.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 bg-gray-800 border border-gray-700">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={getNewPathname(lang.code)}
            className="block w-full"
          >
            <DropdownMenuItem
              className={`text-sm px-3 py-2 cursor-pointer ${
                currentLang === lang.code
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {lang.label}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}