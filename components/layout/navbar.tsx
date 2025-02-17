"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { usePathname } from "next/navigation";
import { getTranslation } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as Locale;

  const t = (key: string) => getTranslation(locale, `navigation.${key}`);

  const navigationItems = [
    {
      title: t('aboutUs'),
      items: [
        { label: t('ourStory'), href: `/${locale}/about` },
        { label: t('contact'), href: `/${locale}/contact` },
      ]
    },
    {
      title: t('whatWeDo'),
      items: [
        { label: t('programs'), href: `/${locale}/programs` },
        { label: t('services'), href: `/${locale}/services` },
      ]
    },
    {
      title: t('supportUs'),
      items: [
        { label: t('volunteer'), href: `/${locale}/volunteer` },
        { label: t('donate'), href: `/${locale}/donate` },
      ]
    },
    {
      title: t('information'),
      items: [
        { label: t('forParents'), href: `/${locale}/parents` },
        { label: t('forHealthcare'), href: `/${locale}/healthcare` },
      ]
    }
  ];

  return (
    <header className="fixed w-full bg-gray-900 z-50">
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex-shrink-0">
              <div className="relative w-[180px] h-[50px] sm:w-[240px] sm:h-[70px]">
                <Image
                  src="/from-above-logo.jpg"
                  alt="From Above"
                  fill
                  sizes="(max-width: 640px) 180px, 240px"
                  priority
                  className="object-contain"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navigationItems.map((nav) => (
                  <NavButton 
                    key={nav.title} 
                    title={nav.title} 
                    items={nav.items} 
                  />
                ))}
              </div>

              <div className="flex items-center space-x-4 ml-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="search"
                    name="search"
                    aria-label={t('search')}
                    placeholder={t('search')}
                    autoComplete="off"
                    spellCheck="false"
                    suppressHydrationWarning
                    className="w-[200px] pl-10 pr-4 py-2 text-sm bg-gray-800 border border-gray-700 
                             rounded-full focus:outline-none focus:border-blue-500 transition-all
                             text-gray-100 placeholder-gray-400"
                  />
                </div>

                <LanguageSwitcher />

                <Link href={`/${locale}/donate`}>
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 
                             flex items-center space-x-2 transform hover:scale-105 transition-all"
                  >
                    <Heart className="h-4 w-4" />
                    <span>{t('donate')}</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-4 border-t border-gray-800">
              {navigationItems.map((nav) => (
                <MobileNavItem 
                  key={nav.title} 
                  title={nav.title} 
                  items={nav.items} 
                />
              ))}
              <div className="pt-4 px-4 space-y-4 border-t border-gray-800">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="search"
                    name="search-mobile"
                    aria-label={t('search')}
                    placeholder={t('search')}
                    autoComplete="off"
                    spellCheck="false"
                    suppressHydrationWarning
                    className="w-full pl-10 pr-4 py-2 text-sm bg-gray-800 border border-gray-700 
                             rounded-full focus:outline-none focus:border-blue-500 transition-all
                             text-gray-100 placeholder-gray-400"
                  />
                </div>
                <Link href={`/${locale}/donate`}>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full 
                                   flex items-center justify-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>{t('donate')}</span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavButton({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative whitespace-nowrap"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        className="nav-button flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>

      <div 
        className={`absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50
                   border border-gray-700 transition-all duration-200
                   ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-gray-300 hover:text-white"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-medium whitespace-nowrap">{title}</span>
        <ChevronDown className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-2 mt-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}