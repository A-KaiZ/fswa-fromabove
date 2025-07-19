import React from 'react';
import { Button } from "@/components/ui/button";
import { getTranslation } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'no' },
  ];
}

export default function LoginPage({ params: { locale } }: { params: { locale: string } }) {
  const t = (key: string) => getTranslation(locale as Locale, `login.${key}`);
  return (
    <main className="pt-20 min-h-screen bg-white">
      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">{t('title')}</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t('emailPlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t('passwordPlaceholder')}
              />
            </div>
            
            <Button type="submit" className="w-full">
              {t('submit')}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              {t('noAccount')}{' '}
              <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                {t('signUp')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}